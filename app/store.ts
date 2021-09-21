import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import todosReducer from "./feature/todo";
import { loadState } from "./browser-storage";

const reducers = combineReducers({
  todos: todosReducer,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
