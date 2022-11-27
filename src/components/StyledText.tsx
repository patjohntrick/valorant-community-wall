import React, { CSSProperties } from 'react';

import { Box, IconClasses, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { appColors } from '../constants';

type StyledTextProp = {
  text?: string;
  key?: number;
  route?: string;
  styles?: CSSProperties;
  TextIcon?: JSX.Element;
};

export const StyledList = (props: StyledTextProp) => {
  const { styles, text } = props;
  return (
    <Box>
      <ListItem sx={styles}>{text}</ListItem>
    </Box>
  );
};

const ListItem = styled(Typography)(() => ({
  padding: '20px 0',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '.2s',
  letterSpacing: 1.5,
  ':hover': {
    backgroundColor: appColors.darker
  }
}));
