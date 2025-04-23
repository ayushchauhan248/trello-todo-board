import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';

function TodoCard({ todo }) {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TODO',
    item: { id: todo.id, status: todo.status, todo: todo.todo },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleSave = () => {
    dispatch(updateTodo({ id: todo.id, todo: editText, completed: todo.status === 'Completed' }));
    setIsEditing(false);
  };

  return (
    <div ref={drag} className={`todo-card ${isDragging ? 'dragging' : ''}`}>
      {isEditing ? (
        <div className="edit-section">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        </div>
      ) : (
        <>
          <p className='todo-description-style'>{todo.todo}</p>
          <div className="btn-group">
            <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoCard;
