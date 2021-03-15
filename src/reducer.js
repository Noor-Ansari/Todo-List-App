import React from "react";

const Context = React.createContext();

export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        tasks: [...state.tasks, { data: action.data, id: action.id }].sort(
          (a, b) => b.id - a.id
        ),
      };
    case "REMOVE_TODO":
      const newList = state.tasks.filter((item) => item.id !== action.id);
      return {
        tasks: [...newList],
      };
    default:
      return state;
  }
};

export default Context;
