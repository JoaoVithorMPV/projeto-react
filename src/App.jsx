import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "../src/App.css";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [aaa, setAaa] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [
      ...aaa,
      {
        title: tasktitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setAaa(newTasks);
  };

  return (
    <div className="container">
      <AddTask callTaskAddition={handleTaskAddition} />
      <Tasks bbb={aaa} />
    </div>
  );
};

export default App;
