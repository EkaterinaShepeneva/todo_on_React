import { useState } from "react";
import moment from "moment";
import "./TasksBox.css";

function TodoForm({ setTasks, tasks, validate }) {
  const [userInput, setUserInput] = useState("");

  const changeInput = (event) => {
    setUserInput([event.currentTarget.value]);
  };

  const handleSubmit = (event) => {
    const title = String(userInput).trim();
    event.preventDefault();
    addTask(title);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const addTask = (userInput) => {
    if (!validate(userInput)) return;
    if (userInput) {
      const newTask = {
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("LLLL"),
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <form className="inputBox" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="inputBox__input"
        value={userInput}
        type="text"
        onChange={changeInput}
        onKeyDown={handleKeyPress}
        placeholder="Write something..."
      />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
