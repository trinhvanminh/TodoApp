import React from "react";

export default function View({ setView, todos }) {
  const viewHandler = (e) => {
    //console.log(e.target.value);
    setView(e.target.value);
  };
  const toggleallHandler = () => {
    alert(JSON.stringify({ todos }));
  };
  return (
    <div className="view-element-by-status">
      <button
        value="toggle_all"
        className="view-btn toggle-all-btn"
        onClick={toggleallHandler}
      >
        Toggle All
      </button>
      <div className="view-mode" onClick={viewHandler}>
        <span>Filter</span>
        <button value="all" className="view-btn">
          All
        </button>
        <button value="done" className="view-btn">
          Done
        </button>
        <button value="active" className="view-btn">
          Active
        </button>
      </div>
    </div>
  );
}
