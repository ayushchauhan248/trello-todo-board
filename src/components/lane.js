import React from 'react';
import { useDrop } from 'react-dnd';
import TodoCard from './todoCard';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';

function Lane({ title, todos, status }) {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TODO',
    drop: (item) => {
      if (item.status !== status) {
        dispatch(updateTodo({ id: item.id, todo: item.todo, completed: status === 'Completed' }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [status, dispatch]);

  return (
    <div ref={drop} className={`lane ${isOver ? 'hovered' : ''}`}>
      <h2>{title}</h2>
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Lane;
