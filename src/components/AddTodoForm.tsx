import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (titolo: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="d-flex mb-3 w-100" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's next task to be done?"
        className="rounded-start p-2 flex-grow-1 text-center"
      />
      <label htmlFor="button" className="text-bg-secondary rounded-end">
        <button
          id="button"
          type="submit"
          className="d-block h-100 text-bg-secondary rounded-end"
        >
          Add Task
        </button>
      </label>
    </form>
  );
}
