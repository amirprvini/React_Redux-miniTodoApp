import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayOut } from './components/Layout';
import HomePage from './pages/HomePage';
// import { AppContext, AppProvider } from './store';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayOut/>}>
        <Route index element={<HomePage/>} />
        
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
