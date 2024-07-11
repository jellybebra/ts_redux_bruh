import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "./store/todoSlice.ts";


interface TodoProps {
  id: number;
  name: string;
  checked: boolean;
}

function Todo({id, name, checked}: TodoProps) {
  const dispatch = useDispatch();

  const handleCheckClick = (event) => {
    event.stopPropagation();
    dispatch(toggleTodo({id}));
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    dispatch(removeTodo({id}));
  }

  return (
    <div className="todo">
      <div className="left-side">
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={checked}
          onChange={handleCheckClick}
        />
        <p style={{color: checked ? "#888" : "inherit"}}>
          {checked ? <s>{name}</s> : name}
        </p>
      </div>
      <div className="right-side" onClick={handleDeleteClick}>
        &times;
      </div>
    </div>
  )
}

export default Todo;