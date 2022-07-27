import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoList, settodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  function addTask() {
    settodoList([...todoList, currentTask]);
    inputTask.current.value = '';
    setCurrentTask('');
  }

  function deleteNote(taskToDelete) {
    settodoList(
      todoList.filter((task) => {
        return task != taskToDelete;
      })
    );
  }

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
        <button onClick={addTask}>Add Note</button>
      </div>
      <hr />

      <ul>
        {todoList.map((value, key) => {
          return (
            <div className="listItems">
              <li key={key}>{value}</li>
              <button onClick={() => deleteNote(value)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
