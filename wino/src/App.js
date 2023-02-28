import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Desktop from './components/Desktop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;