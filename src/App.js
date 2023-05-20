import React, { useState } from "react";
import "../src/App.css";

const App = () => {
  // let teste1 = "teste one";
  const [task, setTask] = useState([
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
    <>
      <div className="container"></div>;
    </>
  );
};

export default App;
