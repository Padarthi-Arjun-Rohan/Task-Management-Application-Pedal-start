import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/tasks', formData)
      .then(response => {
        onSave(response.data);
        setFormData({ title: '', description: '', dueDate: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        placeholder="Due Date"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
