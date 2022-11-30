import React, { ReactNode } from 'react';

import { Box } from '@mui/system';
import styled from '@emotion/styled';
// import { appColors } from '../constants';

type StyledLayoutProps = {
  children?: ReactNode;
};

export const StyledLayout = ({ children }: StyledLayoutProps) => {
  return <BoxContainer>{children}</BoxContainer>;
};

const BoxContainer = styled(Box)(() => ({
  display: 'flex',
  minHeight: '88vh',
  // border: '1px solid cyan',
  justifyContent: 'space-between'
}));

// const FeedContainer = styled(Box)(() => ({
//   backgroundColor: appColors.black,
//   borderRadius: 5
// }));

// const SubFeedContainer = styled(Box)(() => ({
//   backgroundColor: 'red',
//   borderRadius: 5
// }));
