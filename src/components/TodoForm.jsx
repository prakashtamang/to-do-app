import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      toast.success("Task added successfully!");
      setValue("");
    } else {
      toast.error("Please enter a task.");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
