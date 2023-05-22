import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "../src/App.css";

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

  return (
    <div className="container">
      <Tasks bbb={aaa} />
    </div>
  );
};

export default App;
