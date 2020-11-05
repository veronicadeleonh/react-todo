import React, { useState } from "react"
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
      <h1>Veronica's to-do list</h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
