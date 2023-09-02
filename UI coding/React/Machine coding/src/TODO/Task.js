import React from "react";

const Task = (props) => {
  const { label, onDelete } = props;

  return (
    <li key={`${label.toString()}`}>
      <span>{label}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;
