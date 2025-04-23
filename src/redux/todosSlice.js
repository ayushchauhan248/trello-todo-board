import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get(`${API_URL}`);
  return res.data.todos;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default todosSlice.reducer;
