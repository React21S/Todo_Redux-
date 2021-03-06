import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../store/reducer";

import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

// import * as actionTypes from '../store/action'

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", task: "", description:""});

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(createNote(todo));
  };

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={changeHandler} name="title" />
      </div>
      <div>
        <label htmlFor="task">Task</label>
        <input id="task" type="text" onChange={changeHandler} name="task" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" type="text" onChange={changeHandler} name="description" />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;