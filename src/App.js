import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar'

import { ContextProvider } from './state/context'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Another from './pages/Another'


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="container">

          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/another" element={<Another />} />
          </Routes>

        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
