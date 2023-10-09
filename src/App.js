import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Information from './Components/pages/Information';
import AskQuestion from './Components/pages/AskQuestion';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/information' exact element={<Information/>}/>
            <Route path='/ask-question' exact element={<AskQuestion/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
