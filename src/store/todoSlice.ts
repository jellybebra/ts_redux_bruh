import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
  checked: boolean
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos")!)
    : [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ name: string }>) {
      state.todos.push({
        id: Date.now(),
        name: action.payload.name,
        checked: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo(state, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo(state, action: PayloadAction<{ id: number }>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.checked = !todo.checked;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    }
  }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;