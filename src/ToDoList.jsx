import React, { useState } from "react";
import "./index.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: "Eat", completed: false },
    { text: "Shower", completed: false },
    { text: "Walk", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function editTask(index) {
    setEditIndex(index);
    setNewTask(tasks[index].text);
  }

  function saveTask() {
    if (newTask.trim() !== "") {
      const updateTasks = tasks.map((task, i) =>
        i === editIndex ? { ...task, text: newTask } : task
      );
      setTasks(updateTasks);
      setNewTask("");
      setEditIndex(null);
    }
  }

  function toggleCompleteTask(index) {
    const updateTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the task..."
          value={newTask}
          onChange={handleInputChange}
        />
        {editIndex !== null ? (
          <button className="save-button" onClick={saveTask}>
            Save
          </button>
        ) : (
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        )}
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleteTask(index)}
            />
            <span className="text">{task.text}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="edit-button" onClick={() => editTask(index)}>
              Edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
