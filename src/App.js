import React from "react";
//import Axios from "axios";
import './App.css';
import Login from "./components/Login";
import StudentProfile from "./components/StudentProfile";
import Teacher from "./components/Teacher";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Student from "./components/Student"
import EditStudent from "./components/EditStudent";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/student/:id" element={<StudentProfile/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/teacher/:id" element={<Teacher/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="/dashboard/student" element={<Student/>}></Route>
          <Route path="/dashboard/addStudent" element={<AddStudent/>}></Route>
          <Route path="/dashboard/edit_student/:id" element={<EditStudent/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
