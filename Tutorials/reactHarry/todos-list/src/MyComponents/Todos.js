import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const todoContainerStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container" style={todoContainerStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos To Display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  key={todo.sno}
                  todo={todo}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};

Todos.defaultProps = {
  onDelete: () => {
    console.log("Delete called");
  },
};
