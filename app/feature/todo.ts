import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface Todo {
  id?: number;
  name: string;
  dueDate: string;
  done: boolean;
}
// Define a type for the slice state
export interface TodosState {
  todos: Todo[];
}

// Define the initial state using that type
const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createTodo: (state, action: PayloadAction<Todo>) => {
      const id = state.todos.length;
      state.todos.push({ ...action.payload, id });
    },
    deleteTodo: (
      state,
      action: PayloadAction<Exclude<Todo["id"], undefined>>
    ) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { createTodo, deleteTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
