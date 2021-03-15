import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import Context from "../reducer";
import "./Container.css";

function Container({ title }) {
  const [{ tasks }] = useContext(Context);

  return (
    <div className="container">
      <div className="tasksList">
        {tasks.reverse().map((item, idx) => (
          <TodoItem data={item.data} key={idx} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Container;
