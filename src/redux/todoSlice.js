import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get('https://dummyjson.com/todos');
  const todosWithStatus = res.data.todos.map(todo => ({
    ...todo,
    status: todo.completed ? 'Completed' : 'Pending'
  }));
  return todosWithStatus;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
  const res = await axios.post('https://dummyjson.com/todos/add', {
    todo: todo.todo,
    completed: todo.completed,
    userId: todo.userId || 1
  });
  return {
    ...res.data,
    status: res.data.completed ? 'Completed' : 'Pending'
  };
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const res = await axios.put(`https://dummyjson.com/todos/${todo.id}`, {
    todo: todo.todo,
    completed: todo.completed
  });
  return {
    ...res.data,
    status: res.data.completed ? 'Completed' : 'Pending'
  };
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`https://dummyjson.com/todos/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default todoSlice.reducer;
