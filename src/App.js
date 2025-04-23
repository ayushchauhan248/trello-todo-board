import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/todoSlice';
import Board from './components/board';
import CreateTodoForm from './components/createTodoForm';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <h1 className="title">Trello Todo Board</h1>
        <CreateTodoForm />
        {loading ? <p className="loading-style">Loading...</p> : <Board />}
      </div>
    </DndProvider>
  );
}

export default App;
