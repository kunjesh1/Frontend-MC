import React, { useRef, useState } from "react";
import Task from "./Task";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    console.log({ inputRef });
    if (inputRef.current) {
      setTasks((prevTasks) => [...prevTasks, inputRef.current.value]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const updatedTasks = tasks.filter((task) => task.id.toString() !== taskId);
    setTasks(updatedTasks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const onDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handlePressDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          onKeyDown={handlePressDown}
        />
        <div>
          <button onClick={addTask}>Submit</button>
        </div>
      </div>
      <ul className="wrapper" onDrop={handleDrop} onDragOver={handleDragOver}>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              label={task}
              onDelete={() => onDeleteTask(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}
