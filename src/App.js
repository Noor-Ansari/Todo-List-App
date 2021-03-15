import React, { useReducer } from "react";
import "./App.css";
import Home from "./components/Home";
import { reducer, initialState } from "./reducer";
import Context from "./reducer";

function App() {
  const store = useReducer(reducer, initialState);
  return (
    <Context.Provider value={store}>
      <div className="App">
        <Home />
      </div>
    </Context.Provider>
  );
}

export default App;
