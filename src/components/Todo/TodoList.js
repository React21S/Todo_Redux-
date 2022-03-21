import React,{useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import { removeItem, toggleItem } from '../store/reducer';

import classes from "./TodoList.module.css";






const TodoList = () => {
  const notes = useSelector((state)=>state)
  const [filteredValue, setFilteredValue] = useState();
  const [filterList, setFilteredList] = useState(notes);
  const [searchValue, setSearchValue]= useState('');
  // const [searchList, setSearchList]= useState();
  const dispatch = useDispatch();

  // const removeHandler = (id) => {
  //   // console.log(id, "was clicked");
  //   dispatch({
  //     type: actionTypes.REMOVE_TODO,
  //     payload: id
  //   });
  // };
  // const doneHandler = (id) => {
  //   // console.log(id, "was clicked");
  //   dispatch({
  //     type: actionTypes.DONE_TODO,
  //     payload: id
  //   });
  // };

  // for filtering 
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

    // for search the value 
    useEffect(()=>{
      if(searchValue === ''){
        setFilteredList(notes);
      }else{
        setFilteredList(notes.filter((note)=>
        note.title.toLowerCase()
        .includes(searchValue)))
      }
    },[searchValue, notes] )

  // // second version of filtering
  // useEffect(() => {
  //   filteredValue === 'true'
  //     ? setFilteredList(notes.filter((item) => item.done === !!filteredValue))
  //     : filteredValue === 'false'
  //     ? setFilteredList(notes.filter((item) => item.done !== !!filteredValue))
  //     : setFilteredList(notes);
  // }, [filteredValue, notes]);

  // // second version of searching
  // useEffect(() => {
  //   searchValue === ''
  //     ? setFilteredList(notes)
  //     : setFilteredList(
  //         notes.filter((note) => note.title.includes(searchValue))
  //       );
  // }, [searchValue, notes]);

  const filterHandler = (e) => {
    setFilteredValue(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <select name="done" defaultValue="all" onChange={filterHandler} >
      <option value="all">All</option>
      <option value="true">Done</option>
      <option value="false">NotDone</option>
    </select>
    <input type="search" id="search" onChange={searchHandler} name="title" placeholder="Type to search for the task" />
      {filterList?.map((note) => {
        return (
          <div
          onClick={() => dispatch(toggleItem(note))}
              className={`${classes.todo} ${
                note.done ? classes.done : classes.notDone
              }`}
              key={note.id}
            >
              <h2>
                {note.id}. Title: {note.title}
              </h2>
              <h3>Task:{note.task}</h3>
              <p>Description: {note.description}</p>
              
              <div key={note.id} className={`material-icons ${classes.delete}`} onClick={()=>dispatch(removeItem(note.id))}> delete
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;