import React, { useState } from 'react';
import AddTaskButton from './components/AddTask';
import Header from './components/Header';
import Project from './components/Project';
// import ProjectToDoList from './components/ProjectToDoList';

function App() {
  const [addInputRevealed, setAddInputRevealed] = useState(false);

  // show the input field
  const ShowAddTaskInput = () => {
    setAddInputRevealed((prev) => !prev);
  };

  return (
    <div className="box-border h-screen m-0 p-0">
      <Header />
      <main className="min-h-[calc(100vh_-_11rem)] list-none">
        {' '}
        <Project
          addInputRevealed={addInputRevealed}
          ShowAddTaskInput={ShowAddTaskInput}
          setAddInputRevealed={setAddInputRevealed}
        />
      </main>
      <AddTaskButton ShowAddTaskInput={ShowAddTaskInput} />
      <footer />
    </div>
  );
}

export default App;
