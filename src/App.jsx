import React, { useState } from "react"
import "./index.css"

const App = () => {
  // State to store tasks and the current input value
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === "") return // Prevent adding empty tasks

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
    setNewTask("") // Clear the input field
  }

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
