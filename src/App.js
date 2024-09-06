import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const App = () => {
  // Инициализация состояния из localStorage

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // обновление и синхронизациия localStorage

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Добавление новой задачи

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    updateTodos([...todos, newTodo]);
  };

  // Удаление задачи

  const deleteTodo = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  // Переключение статуса задачи

  const toggleTodo = (id) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
