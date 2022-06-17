import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Description cannot be blank");
        return;
    }
    addTodo(title,desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter Todo..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="todo-desc" className="form-label">
            Description
          </label>

          <textarea
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="todo-desc"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-sm btn-success">
            AddTodo
          </button>
        </div>
      </form>
    </div>
  );
};
