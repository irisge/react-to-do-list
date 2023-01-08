import React from 'react';

function TaskForm({ taskValue, saveValue, createTask, id }) {
  return (
    <input
      type="text"
      placeholder="Enter your new task"
      value={taskValue}
      onChange={saveValue}
      onKeyUp={createTask}
      onClick={createTask}
      id={id}
    />
  );
}

export default TaskForm;
