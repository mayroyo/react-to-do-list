import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import addListModalSliceReducer from "./features/AddListModalSlice";
import AddTodoModalSliceReducer from "./features/AddTodoModalSlice";
import dataSlice from "./features/DataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addListModal: addListModalSliceReducer,
    addTodoModal: AddTodoModalSliceReducer,
    data: dataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
