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
    <ul
      className={
        "bg-secondary pt-4 pb-1 px-2 rounded mb-3 fs-3 d-flex flex-column align-items-center"
      }
    >
      {todosSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todoObj={todo}
          onCompletedChange={onCompletedChange}
          deleteThis={deleteThis}
        />
      ))}
    </ul>
  );
}
