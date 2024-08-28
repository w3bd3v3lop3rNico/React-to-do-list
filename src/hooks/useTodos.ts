import { useEffect, useState } from "react";
import { missioni } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : missioni;
  });

  //To update local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        id: Date.now(),
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

  return {
    todos,
    setTaskCompleted,
    addNewTodo,
    deleteTodo,
    deleteCompleted,
  };
}
