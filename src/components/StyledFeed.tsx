import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import { appColors } from '../constants';
// type StyledFeedProps = {

// }

export const StyledFeed = () => {
  const { pathname } = useLocation();
  return (
    <BoxContainer>
      <Typography>{pathname}</Typography>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)(() => ({
  backgroundColor: appColors.black,
  borderRadius: 5,
  height: '100%',
  width: '70%',
  minHeight: '88vh',
  padding: 16
}));
