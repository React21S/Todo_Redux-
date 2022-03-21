import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { initNotes } from "./components/store/reducer";

import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(initNotes());
  },[dispatch]);

  return (
    <div>
       <Header/>
      <AddTodo />
      <TodoList />
      <Footer/>
    </div>
  );
};

export default App;