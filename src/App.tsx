import "./App.css";
import TodoItem from "./components/TodoItem";
import { missioni } from "./data/todos";

function App() {
  return (
    <main>
      <h1>My todos</h1>
      <div>
        <ul>
          {missioni.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
