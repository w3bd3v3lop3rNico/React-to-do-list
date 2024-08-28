import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, setTaskCompleted, addNewTodo, deleteTodo, deleteCompleted } =
    useTodos();
  return (
    <main className="main">
      <h1 className="text-center">My todos</h1>
      <div className="section bg-secondary pt-4 pb-1 px-2 rounded mb-3 fs-3 d-flex flex-column align-items-center">
        <AddTodoForm onSubmit={addNewTodo} />
        <TodoList
          todosArr={todos}
          onCompletedChange={setTaskCompleted}
          deleteThis={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteCompleted} />
    </main>
  );
}

export default App;
