/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faCheckCircle,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import more from '../assets/more.svg';
import todoLogo from '../assets/todoLogo.svg';
import doneLogo from '../assets/doneLogo.svg';

function Project({ addInputRevealed, setAddInputRevealed }) {
  const [toDo, setToDo] = useState([
    // { taskValue: 'first task', id: 1, status: false },
    // { taskValue: 'second task', id: 2, status: false },
  ]);
  // in order to hold temporary data that will be added as new tasks in task list
  const [newTask, setNewTask] = useState('');

  // create a task
  const createTask = (e) => {
    if (newTask && (e.key === 'Enter' || e.keyCode === 13)) {
      setToDo([
        ...toDo,
        { taskValue: newTask, id: toDo.length + 1, status: false },
      ]);
      setNewTask('');
      setAddInputRevealed((prev) => !prev);
    }
  };

  // delete a task
  const deleteTask = (id) => {
    setToDo(toDo.filter((task) => task.id !== id));
  };

  // mark a task as done
  const markDoneTask = (id) => {
    setToDo(
      toDo.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const toBeDone = toDo.length;
  const done = toDo.filter((task) => task.status === true).length;

  return (
    <div className="flex flex-col justify-center w-full border-box h-full">
      <div className="mt-11 mr-11 ml-11 bg-white">
        <div className="drop-shadow-1m flex justify-between align-start px-5 py-4 bg-project-pattern bg-no-repeat bg-cover rounded-t-lg w-100 ">
          <div className="flex-column">
            <h1 className="font-primary text-base font-bold text-white p-0.6rem">
              To Do List
            </h1>
            <p className="font-secondary font-normal text-xs text-lighGray p-0.6rem">
              {' '}
              {toBeDone - done} tasks remaining
            </p>
          </div>
          <img className="mb-6" src={more} alt="see more clickable" />
        </div>

        <div className=" text-sm  flex flex-col mx-0.5 p-4 drop-shadow-1m bg-white rounded-b-lg">
          <div className="flex flex-col justify-center">
            {/* Display To Do error message - no task */}
            {toDo.length < 1 && (
              <p className="font-secondary text-1sm drop-shadow-none">
                There is no task to do
              </p>
            )}

            {/* Display To Do */}
            {toDo.map((task, index) => (
              <li
                key={index}
                className={
                  task.status
                    ? 'flex items-center my-3 w-full line-through text-1sm font-secondary text-lightPurple'
                    : 'flex items-center my-3 w-full text-1sm font-secondary'
                }
              >
                <img
                  className="mr-4 drop-shadow-2m"
                  src={task.status ? doneLogo : todoLogo}
                  alt={task.status ? 'Ongoing task' : 'Task Done'}
                  onClick={() => markDoneTask(task.id)}
                />
                <span className="">{task.taskValue}</span>{' '}
                <FontAwesomeIcon icon={faPen} className="mx-4" />
                {task.status ? (
                  <FontAwesomeIcon
                    className="text-darkgray"
                    aria-hidden="true"
                    title="Delete Task"
                    icon={faTrashCan}
                    onClick={() => deleteTask(task.id)}
                  />
                ) : (
                  ''
                )}
              </li>
            ))}
          </div>
        </div>

        {addInputRevealed ? (
          <div className="flex justify-start m-4 filter-none drop-shadow-none">
            <img className="mr-4" src={todoLogo} />
            <input
              className="task-input bg-white drop-shadow-invisible text-lightPurple placeholder:italic rounded-md focus:outline-none"
              type="text"
              placeholder="Add your task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyUp={(e) => createTask(e)}
            />
            <button
              type="button"
              className="hidden md:flex p-2 bg-button rounded-lg text-white text-opacity-100"
            >
              Add Task
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
