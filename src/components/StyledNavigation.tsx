import React from 'react';

import { Box } from '@mui/system';
import { AppBar, Button, Toolbar, List, Typography } from '@mui/material';
import styled from '@emotion/styled';

import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

import { appColors, lists } from '../constants';

export const StyledNavigation = () => {
  return (
    <Box>
      <SideBarStyle>
        <Box>
          {lists.map((value, index) => (
            <ListItem key={index}>{value.nameList}</ListItem>
          ))}
        </Box>
        <IconContainer>
          <PersonIcon
            sx={{
              color: appColors.white,
              fontSize: 32,
              borderRadius: '50%',
              transition: '.5s',
              //   padding: 3,
              ':hover': { backgroundColor: appColors.darker }
            }}
          />
        </IconContainer>
      </SideBarStyle>
      <AppBarStyle>
        <ToolbarStyle>
          <TextHeaderStyle variant="h6">Valorant Community Wall</TextHeaderStyle>
          <GitHubIcon />
        </ToolbarStyle>
      </AppBarStyle>
    </Box>
  );
};

const ToolbarStyle = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100%'
}));

const TextHeaderStyle = styled(Typography)(() => ({
  color: appColors.textHeader
}));

const ButtonStyle = styled(Button)(() => ({
  backgroundColor: appColors.backgroundRed,
  color: appColors.white
}));

const AppBarStyle = styled(AppBar)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '8vh',
  backgroundColor: appColors.black,
  zIndex: '1'
}));

const SideBarStyle = styled(Box)(() => ({
  backgroundColor: appColors.black,
  width: '200px',
  position: 'absolute',
  left: 0,
  top: '8vh',
  padding: '10px 0',
  zIndex: '99',
  height: '92vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const ListItem = styled(List)(() => ({
  color: appColors.white,
  textTransform: 'capitalize',
  padding: '20px 0',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '.2s',
  ':hover': {
    backgroundColor: appColors.darker
  }
}));

const IconContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer'
}));
