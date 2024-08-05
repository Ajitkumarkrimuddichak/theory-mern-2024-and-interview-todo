// First stap hai configureStore()
import { configureStore } from "@reduxjs/toolkit"; //configureStore yek method hai jo ki store banane ka kam karata hai
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  //one object lete hai / most of chijhe object hi hote hai
  reducer: todoReducer,
});
