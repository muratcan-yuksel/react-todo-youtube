import React from "react";

const Todo = ({ title, completed, id, handleDone, handleDelete }) => {
  return (
    <div
      key={id}
      className="todoItem pl-4 border flex justify-between items-center"
    >
      <p className={`${completed ? "line-through" : ""}`}>{title}</p>{" "}
      <div className="buttons flex ">
        <button
          onClick={() => {
            handleDone(id);
          }}
          className="bg-[#3633e0] text-[#1c1d1c] m-2 px-2 py-1 rounded"
        >
          Done
        </button>

        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="bg-[#ec0d0d] text-[#1c1d1c] m-2 px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
