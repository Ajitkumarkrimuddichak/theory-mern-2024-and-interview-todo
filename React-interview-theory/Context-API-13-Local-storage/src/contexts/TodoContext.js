import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    //jo value todo se lini hai vahi yaha hai
    {
      // component koi bhi ho value yhi se lunga
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {}, //method ka functinality to kahi or likhunag
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
