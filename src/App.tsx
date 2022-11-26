import React, { useEffect, useState } from 'react';

import { Login } from './pages';
import { Home } from './pages/Home';
import { appColors } from './constants';
import { StyledNavigation } from './components/StyledNavigation';

function App() {
  return (
    <div className="App" style={{ backgroundColor: appColors.semiBlack, height: '100vh' }}>
      {/* <Login /> */}
      <StyledNavigation />
    </div>
  );
}

export default App;
