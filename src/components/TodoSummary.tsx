import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completata);

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="fs-4 text-secondary">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button onClick={deleteAllCompleted} className="btn btn-danger">
          Delete Completed Tasks
        </button>
      )}
    </div>
  );
}
