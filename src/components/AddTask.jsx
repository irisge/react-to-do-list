import React from 'react';

function AddTaskButton({ ShowAddTaskInput }) {
  return (
    <footer className="flex justify-center m-4">
      <button
        className="bg-footer-texture bg-no-repeat bg-cover border-none rounded-2xl w-16 h-16 drop-shadow-2m text-white font-primary text-center font-normal text-5xl cursor-pointer "
        onClick={ShowAddTaskInput}
        type="button"
      >
        {' '}
        +{' '}
      </button>
    </footer>
  );
}

export default AddTaskButton;
