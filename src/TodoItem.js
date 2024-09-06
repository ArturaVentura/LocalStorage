import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </div>
  );
};

export default TodoItem;
