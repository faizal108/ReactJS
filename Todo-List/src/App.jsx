import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  }, [todos])
  function addTodo(title) {
    setTodos((curretnTodos) => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((curretnTodos) => {
      return curretnTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((curretnTodos) => {
      return curretnTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1>ToDo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
