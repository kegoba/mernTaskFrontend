import React from 'react';
//import logo from './logo.svg';
import {  Routes, Route } from "react-router-dom";

import './App.css';
import Menu from "./components/menu"
import Addtodo from "./components/addtodo"
import DisplayTodo from "./components/displaytodo"
import AddEmail from "./components/addemail"


import Footer from "./components/footer"



function App() {
  return (
     <div className="">
      <Menu className="" />
     
      <Routes>
        <Route path="/" element={<Addtodo/>}/>
        <Route path="/addtodo" element={<Addtodo/>}/>
        <Route path="/displaytodo" element={<DisplayTodo/>}/>
        <Route path="/addemail" element={<AddEmail/>}/>
      </Routes>
       <Footer/>
    </div>
 
  );
}

export default App;
