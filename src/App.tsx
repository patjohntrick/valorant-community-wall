import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Login } from './pages';
import { StyledNavigation } from './components/StyledNavigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<StyledNavigation />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
