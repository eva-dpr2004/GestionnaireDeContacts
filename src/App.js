import React from 'react';
import './App.css';
import AppRoutes from './Router';
import Navbar from './components/Basics/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
