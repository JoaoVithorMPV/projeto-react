import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "../src/App.css";

const App = () => {
  // let teste1 = "teste one";
  const [aaa, setTask] = useState([
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
      <div className="container">
        <Tasks aaa={aaa} />
      </div>
      ;
    </>
  );
};

export default App;
