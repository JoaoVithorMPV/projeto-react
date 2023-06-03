import React, { useState } from "react";
import "./style-AddTask.css";
import Button from "./button";

const AddTask = ({ callTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddTaskClick = () => {
    callTaskAddition(inputData);
    setInputData("");
  };
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button VonClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
