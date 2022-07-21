import moment from "moment";
import style from "./TasksBox.module.css";
import { useState } from "react";
import { validateInputTodo } from "../../utils/utils.js";
import { postTask } from "../../api/http.js";

function TodoInputForm({ renderTask, setIsError }) {
  const [userInput, setUserInput] = useState("");

  const changeInput = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    const name = userInput.trim();
    event.preventDefault();
    addTask(name);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const addTask = (userInput) => {
    if (!validateInputTodo(userInput)) return;
    if (userInput) {
      const newTask = {
        name: userInput,
        done: false,
        createdAt: Date.now(),
        updatedAt: moment().format("LLLL"),
      };

      postTask(newTask).catch(()=>setIsError(true));
    }
  };

  return (
    <div className={style.inputBox}>
      <input
        autoFocus
        className={style.inputBox__input}
        value={userInput}
        type="text"
        onChange={changeInput}
        onKeyDown={handleKeyPress}
        placeholder="Write something..."
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
}

export default TodoInputForm;
