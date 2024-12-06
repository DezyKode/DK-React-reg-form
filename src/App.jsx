import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './StudentForm';
import EmployeeForm from './EmployeeForm';
// import Footer from './Footer';
import './App.css';
// import Header from './Header'

function App() {
    return ( <Router >
{/* <Header /> */}
        <StudentForm/>
{/* <Footer/> */}
        </Router>
    );
}

export default App;