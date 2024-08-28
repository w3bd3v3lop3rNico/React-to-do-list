import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

// Errore typescript in props

interface TodoListProps {
  todosArr: Todos[];
  todoObj: Todo;
  onCompletedChange: (id: number, completata: boolean) => void;
  deleteThis: (id: number) => void;
}

export default function TodoList({
  todosArr,
  onCompletedChange,
  deleteThis,
}: TodoListProps) {
  const todosSorted = todosArr.sort((a: Todo, b: Todo) => {
    if (a.completata === b.completata) {
      return b.id - a.id;
    }
    return a.completata ? 1 : -1;
  });
  return (
    <>
      <ul className={"w-100 m-0"}>
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todoObj={todo}
            onCompletedChange={onCompletedChange}
            deleteThis={deleteThis}
          />
        ))}
      </ul>
      {todosArr.length === 0 && <p>No todo found. Add a new!</p>}
    </>
  );
}
