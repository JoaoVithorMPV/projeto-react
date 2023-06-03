import React from "react";
import "./style-task.css";

const Task = ({ ddd }) => {
  return <div className="task-container">{ddd.title}</div>;
};

export default Task;
