import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { StyledFeed } from '../components/StyledFeed';
import { StyledLayout } from '../components/StyledLayout';
import { StyledSubFeed } from '../components/StyledSubFeed';
import { getValoApi } from '../api';
import axios from 'axios';

export const Agents = () => {
  const { pathname } = useLocation();
  // const queryClient = useQueryClient();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['get'],
    queryFn: () => axios.get(getValoApi(pathname).get)
  });

  console.log(data?.data);

  return (
    <StyledLayout>
      <StyledFeed />
      <StyledSubFeed />
    </StyledLayout>
  );
};
