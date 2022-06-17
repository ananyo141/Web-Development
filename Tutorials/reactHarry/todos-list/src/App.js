import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("db", JSON.stringify(todos));
    alert(`Todo: ${title} successfully added`);
  };

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("db") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="TodosList" searchBar={true} />

        <Routes>
          <Route exact path="/" element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
