import React from 'react';

import { Typography } from '@mui/material';
import { StyledLayout } from '../components/StyledLayout';
import { StyledFeed } from '../components/StyledFeed';
import { StyledSubFeed } from '../components/StyledSubFeed';

export const Maps = () => {
  return (
    <StyledLayout>
      <StyledFeed />
      <StyledSubFeed />
    </StyledLayout>
  );
};
