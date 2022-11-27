import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';
import { StyledNavigation } from './components/StyledNavigation';
import { BasePages } from './pages';

function App() {
  return (
    <div className="App">
      <StyledNavigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<BasePages />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
