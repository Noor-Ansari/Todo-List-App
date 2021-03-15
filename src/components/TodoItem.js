import React, { useContext, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TodoItem.css";
import Context from "../reducer";

const TodoItem = ({ data, id }) => {
  const [, dispatch] = useContext(Context);
  const [checked, setChecked] = useState(false);

  function handleClick() {
    dispatch({
      type: "REMOVE_TODO",
      id: id,
    });
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="task">
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={checked ? "item--done" : null}>{data}</p>
      <DeleteIcon onClick={handleClick} />
    </div>
  );
};

export default TodoItem;
