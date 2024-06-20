import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const handleSaveTask = newTask => {
    // Add logic to update task list with new task
  };

  return (
    <div>
      <TaskForm onSave={handleSaveTask} />
      <TaskList />
    </div>
  );
};

export default App;
