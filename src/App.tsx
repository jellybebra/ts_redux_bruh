import React, {useState} from 'react'
import './App.scss'
import Todo from "./Todo.tsx";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice.ts";

function App() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const addTask = (event) => {
    event.preventDefault();

    if(name.trim() !== '') {
      dispatch(addTodo({name}));
      setName('');
    }
  }

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form onSubmit={addTask} className="input-field">
        <input
          type="text"
          placeholder="New task"
          name="new-task"
          value={name}
          autoFocus
          onChange={handleInputChange}
        />
        <button type="submit">
          Add a task
        </button>
      </form>

      <hr/>

      <div className="todos">
        {todos.length === 0 ? <p className="read-the-docs">No tasks</p> :
          todos.map((todo) =>
            <React.Fragment key={todo.id}>
              <Todo {...todo} />
            </React.Fragment>
          )
        }
      </div>
    </>
  )
}

export default App
