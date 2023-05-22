import React from "react";
import Task from "./Task";

const Tasks = ({ bbb }) => {
  return (
    <>
      {bbb.map((ccc) => (
        <Task key={ccc.id} ddd={ccc} />
      ))}
    </>
  );
};

export default Tasks;
