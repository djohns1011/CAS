import React from "react";
//import Axios from "axios";
import './App.css';
import Login from "./components/Login";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Admin from "./components/Admin";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/student/:id" element={<Student/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/teacher/:id" element={<Teacher/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
