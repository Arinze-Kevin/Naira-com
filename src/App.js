import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import './App.css';

const App = () => {

  return (
  <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  </>
  )
}

export default App