import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Agents } from './Agents';
import { Events } from './Events';
import { StyledBackground } from '../components/StyledBackground';

export const BasePages = () => {
  return (
    <StyledBackground>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </StyledBackground>
  );
};

// const BoxContainer = styled(Box)(() => ({
//   // border: '1px solid cyan',
//   position: 'relative',
//   minHeight: '100vh',
//   top: '8vh'
//   // backgroundColor: appColors.black
// }));
