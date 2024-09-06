import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoInput;
