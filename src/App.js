import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<ErrorPage />} />
      
      </Routes>
    </>
  );
}

export default App;
