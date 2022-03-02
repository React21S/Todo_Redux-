import React from "react";

import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
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
