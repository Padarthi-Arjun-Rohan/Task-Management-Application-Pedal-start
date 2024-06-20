import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEditTask = taskId => {
    // Add logic to navigate to edit task form or handle editing here
  };

  const handleDeleteTask = taskId => {
    axios.delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => setTasks(tasks.filter(task => task._id !== taskId)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.dueDate}
            <button onClick={() => handleEditTask(task._id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
