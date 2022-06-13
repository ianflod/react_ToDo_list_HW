import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState(
    ["Wash Dishes", " Clean Windows", " Make Dinner"]
  );

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task) => {
    return (
      <li>{task}</li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewtask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push(newTask)
    setTasks(copyTasks)
    setNewTask("")
  }



  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {taskNodes}
      </ul>
      <form onSubmit={saveNewtask}>
        <label htmlFor="new-task"></label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />
        <input type="submit" value="Save New Task" />
      </form>

    </div>
  );
}

export default App;
