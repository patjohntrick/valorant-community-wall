import React, { ReactNode } from 'react';

import { Box } from '@mui/system';
import { appColors } from '../constants';
import styled from '@emotion/styled';

type StyledBackgroundProps = {
  children: ReactNode;
};

export const StyledBackground = (props: StyledBackgroundProps) => {
  return <BoxContainer>{props.children}</BoxContainer>;
};

const BoxContainer = styled(Box)(() => ({
  backgroundColor: appColors.semiBlack,
  position: 'relative',
  left: '13vw',
  top: '8vh',
  height: '92vh',
  width: '87vw',
  padding: 20
}));
