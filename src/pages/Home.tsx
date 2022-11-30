import { Typography } from '@mui/material';
import React from 'react';
import { StyledBackground } from '../components/StyledBackground';
import { StyledFeed } from '../components/StyledFeed';
import { StyledLayout } from '../components/StyledLayout';
import { StyledSubFeed } from '../components/StyledSubFeed';

export const Home = () => {
  return (
    <>
      <StyledLayout>
        <StyledFeed />
        <StyledSubFeed />
      </StyledLayout>
    </>
  );
};
