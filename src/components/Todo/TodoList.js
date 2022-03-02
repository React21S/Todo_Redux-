import React,{useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import * as actionTypes from '../store/action'

import classes from "./TodoList.module.css";






const TodoList = () => {
  const notes = useSelector(state=>state.notes)
  const [filteredValue, setFilteredValue] = useState();
  const [filterList, setFilteredList] = useState(notes);
  const [search, setSearch]= useState();
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    // console.log(id, "was clicked");
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: id
    });
  };
  const doneHandler = (id) => {
    // console.log(id, "was clicked");
    dispatch({
      type: actionTypes.DONE_TODO,
      payload: id
    });
  };

  useEffect(() => {
    if (filteredValue === "true") {
      setFilteredList(
      notes.filter((item) => item.done === !!filteredValue)
      );
    } else if (filteredValue === "false") {
      setFilteredList(
        notes.filter((item) => item.done !== !!filteredValue)
      );
    } else {
      setFilteredList(notes);
    }
  }, [filteredValue, notes]);


  const filterHandler = (e) => {
    setFilteredValue(e.target.value);
  };


  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <select name="done" defaultValue="all" onChange={filterHandler} >
      <option value="all">All</option>
      <option value="true">Done</option>
      <option value="false">NotDone</option>
    </select>
    <input type="text" onChange={filterHandler} name="title" placeholder="Type to search for the task" />
      {filterList.map((note) => {
        return (
          <div
              onClick={() => doneHandler(note.id)}
              className={`${classes.todo} ${
                note.done ? classes.done : classes.notDone
              }`}
              key={note.id}
            >
              <h2>
                {note.id}. {note.title}
              </h2>
              <p>{note.task}</p>
              
              <div key={note.id} className={`material-icons ${classes.delete}`} onClick={()=>removeHandler(note.id)}> delete
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
