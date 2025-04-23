import React from 'react';
import { useSelector } from 'react-redux';
import Lane from './lane';

function Board() {
  const todos = useSelector((state) => state.todos.items);

  const pendingTodos = todos.filter(todo => todo.status === 'Pending');
  const completedTodos = todos.filter(todo => todo.status === 'Completed');

  return (
    <div className="board">
      <Lane title="Pending" todos={pendingTodos} status="Pending" />
      <Lane title="Completed" todos={completedTodos} status="Completed" />
    </div>
  );
}

export default Board;
