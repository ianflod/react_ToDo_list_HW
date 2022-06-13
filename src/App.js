import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Wash Dishes", priority: "High" },
    { name: "Walk Cat", priority: "Low" },
    { name: "Cut Grass", priority: "High" }
  ]
  );

  const [newTask, setNewTask] = useState("");
  const [newPri, setNewPri] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return (

      <li key={index} className="low"><span>{task.name}</span><span>{task.priority}</span></li>

    )
  });



  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handlePriorityInput = (event) => {
    setNewPri(event.target.value)
  }

  const saveNewtask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({ name: newTask, priority: newPri })
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

        <label htmlFor="high">High</label>
        <input type="radio" value="High" name="priority" onChange={handlePriorityInput} />

        <label htmlFor="low">Low</label>
        <input type="radio" value="Low" name="priority" onChange={handlePriorityInput} />

      </form>

    </div>
  );
}

export default App;
