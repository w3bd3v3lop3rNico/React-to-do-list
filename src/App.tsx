import { useState } from "react";
import { missioni } from "./data/todos";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodos] = useState(missioni);

  function setTaskCompleted(id: number, completata: boolean) {
    // alert(
    //   `Todo with id ${id} is now ${
    //     completata ? "completata" : "non completata"
    //   } `
    // );
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completata } : todo))
    );
  }

  function addNewTodo(titolo: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        titolo,
        completata: false,
      },
      ...prevTodos,
    ]);
  }
  function deleteTodo(id: number) {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }

  function deleteCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completata));
  }

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
