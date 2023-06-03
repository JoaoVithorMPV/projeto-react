import React from "react";
import Task from "./Task";

const Tasks = ({ bbb }) => {
  return (
    <>
      {bbb.map((ccc) => (
        <Task ddd={ccc} />
      ))}
    </>
  );
};

export default Tasks;
