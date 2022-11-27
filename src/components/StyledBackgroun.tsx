import React, { ReactNode } from 'react';
import { Box } from '@mui/system';
import { appColors } from '../constants';

type StyledBackgroundProps = {
  children: ReactNode;
};

export const StyledBackground = (props: StyledBackgroundProps) => {
  return <Box sx={{ backgroundColor: appColors.semiBlack, position: 'relative' }}>{props.children}</Box>;
};
