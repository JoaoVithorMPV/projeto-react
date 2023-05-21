import React from "react";
import Task from "./Task";

const Tasks2 = ({ aaa }) => {
  return (
    <>
      {aaa.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks2;
