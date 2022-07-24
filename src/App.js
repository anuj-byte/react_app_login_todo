import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./components/slide.css";
import SignUpComponent from "./components/signup";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from "./components/dashboard";
import LoginComponent from "./components/login";
import TodoComponentI from "./components/todo";


function App(){
  return(
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
     <Route path="/signup" element={<SignUpComponent></SignUpComponent>}></Route>
     <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
     <Route path="/todo" element={<TodoComponentI></TodoComponentI>}></Route>
    
     
   </Routes>

   </BrowserRouter>
    </div>
  )
}
/*const App=()=>{
  return(
      <TodoComponentI></TodoComponentI>
  )
}*/
export default App