import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        {todo.titolo}
      </p>
    </li>
  );
}
