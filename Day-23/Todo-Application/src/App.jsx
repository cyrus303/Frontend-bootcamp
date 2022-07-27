import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoList, settodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  function addTask() {
    settodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = '';
    setCurrentTask('');
  }

  function deleteNote(taskToDelete) {
    settodoList(
      todoList.filter((task) => {
        return task.task != taskToDelete;
      })
    );
  }

  function completeNote(taskTocomplete) {
    settodoList(
      todoList.map((task) => {
        return task.task === taskTocomplete
          ? { task: taskTocomplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
  }

  // const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive((current) => !current);

  //   // 👇️ or set to true
  //   // setIsActive(true);
  // };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onChange={(event) => setCurrentTask(event.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />

      <ul>
        {todoList.map((value, key) => {
          return (
            <div className="listItems">
              <li
                key={key}
                style={{
                  backgroundColor: value.completed ? 'gray' : '',
                  color: value.completed ? 'white' : '',
                }}
                // onClick={handleClick}
              >
                {value.task}
              </li>
              <button
                className="complete"
                onClick={() => completeNote(value.task)}
              >
                Complete
              </button>
              <button onClick={() => deleteNote(value.task)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
