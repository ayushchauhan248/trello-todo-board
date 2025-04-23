import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';

function CreateTodoForm() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(createTodo({ todo: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="create-input"
      />
      <button type="submit" className="create-button">Create</button>
    </form>
  );
}

export default CreateTodoForm;
