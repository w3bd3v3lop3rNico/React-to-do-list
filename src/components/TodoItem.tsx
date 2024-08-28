import { Todo } from "../types/todo";
import "./css/todo_item.css";

interface TodoItemProps {
  todoObj: Todo;
  onCompletedChange: (id: number, completata: boolean) => void;
  deleteThis: (id: number) => void;
}

export default function TodoItem({
  todoObj,
  onCompletedChange,
  deleteThis,
}: TodoItemProps) {
  return (
    <li className="d-flex align-items-center column-gap-2 bg-info-subtle p-3 rounded w-100 mb-2">
      <input
        type="checkbox"
        key={todoObj.id}
        checked={todoObj.completata}
        onChange={(e) => onCompletedChange(todoObj.id, e.target.checked)}
      />
      <span
        className={
          todoObj.completata
            ? "text-decoration-line-through text-secondary me-auto"
            : "me-auto"
        }
      >
        {todoObj.titolo}
      </span>
      <button
        onClick={() => deleteThis(todoObj.id)}
        className="rounded-circle p-2 delete-btn bg-danger text-light"
      >
        X
      </button>
    </li>
  );
}
