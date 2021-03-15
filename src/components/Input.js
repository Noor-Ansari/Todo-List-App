import React, { useState, useContext } from "react";
import "./Input.css";
import AddIcon from "@material-ui/icons/Add";
import Context from "../reducer";

export default function Input() {
  const [input, setInput] = useState("");
  const [, dispatch] = useContext(Context);

  function clickHandler() {
    if (input !== "") {
      dispatch({
        type: "ADD_TODO",
        data: input,
        id: Date.now(),
      });
      setInput("");
    }
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <AddIcon onClick={clickHandler} />
    </div>
  );
}
