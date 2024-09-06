import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const App = () => {
  // Загрузка данных из localStorage при инициализации состояния
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Сохранение задач в localStorage при изменении списка
  const updateTodos = (newTodos) => {
    setTodos((prevTodos) => {
      const updatedTodos = typeof newTodos === 'function' ? newTodos(prevTodos) : newTodos;
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };


  // Добавление новой задачи
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Удаление задачи
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Переключение статуса задачи (выполнена/не выполнена)
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
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
