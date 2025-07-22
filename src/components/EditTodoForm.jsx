import React, { useState } from "react";
import { toast } from "react-toastify";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      editTodo(value, task.id);
      toast.success("Task updated successfully!");
    } else {
      toast.error("Please enter a task.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
