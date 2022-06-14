import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Wash Dishes", priority: "high" },  //BEWARE of caps and spelling for names/priorities etc
    { name: "Walk Cat", priority: "low" },
    { name: "Cut Grass", priority: "high" }
  ]
  );

  const [newTask, setNewTask] = useState("");
  const [newPri, setNewPri] = useState("");

  const taskNodes = tasks.map((task, index) => {   ///loops through our tasks and creates new array
    return (
      <li key={index} className={task.priority}>{task.name}</li>
    )
  });



  const handleTaskInput = (event) => {  ///HANDLES the input fromn the form
    setNewTask(event.target.value)
  }

  const handlePriorityInput = (event) => {  ///Handles input from form for priority
    setNewPri(event.target.value)
  }

  const saveNewtask = (event) => {
    event.preventDefault();      // STOPS the automatic POST function
    const copyTasks = [...tasks]  //Creates copy of original array, we dont want to manipulate the orignal
    copyTasks.push({ name: newTask, priority: newPri });  // pushes the new task into the array
    setTasks(copyTasks);  /// THIS SETS the new array to be THE array 
    setNewTask("");
    setNewPri("");
    event.target.reset(); ///RESETS the form to blank
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
        <input type="submit" value="Save New Task" />  {/*THIS is the enter button*/}

        <label htmlFor="high">High</label>
        <input type="radio" id="high" value="high" name="priority" onChange={handlePriorityInput} /> {/* ENSURE name is the sme on both radio buttons*/}

        <label htmlFor="low">Low</label>
        <input type="radio" id="low" value="low" name="priority" onChange={handlePriorityInput} /> {/*ONCHANGE is handler for new state*/}

      </form>

    </div>
  );
}

export default App;
