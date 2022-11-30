import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { StyledFeed } from '../components/StyledFeed';
import { StyledLayout } from '../components/StyledLayout';
import { StyledSubFeed } from '../components/StyledSubFeed';
import { getValoApi } from '../api';

export const Agents = () => {
  const { pathname } = useLocation();

  const apiFunction = async () => {
    const { response, data, isLoading } = await getValoApi(pathname);
    console.log(response);
    if (isLoading) {
      return <Typography>Loading...</Typography>;
    }
  };

  useEffect(() => {
    apiFunction();
  }, []);

  return (
    <StyledLayout>
      <StyledFeed />
      <StyledSubFeed />
    </StyledLayout>
  );
};
