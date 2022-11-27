import React from 'react';

import { Box } from '@mui/system';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

import { appColors, lists } from '../constants';
import { StyledList } from './StyledText';

export const StyledNavigation = () => {
  return (
    <Box>
      <SideBarStyle>
        <Box>
          {lists.map((value, index) => (
            <Box key={index}>
              <Link to={value.route} style={{ textDecoration: 'none' }}>
                <StyledList
                  text={value.nameList}
                  styles={{ textTransform: 'uppercase', color: appColors.textHeader }}
                />
              </Link>
            </Box>
          ))}
        </Box>
        <IconContainer>
          <PersonIcon
            sx={{
              color: appColors.white,
              fontSize: 32,
              borderRadius: '50%',
              transition: '.5s',
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
  position: 'fixed',
  top: 0,
  right: 0,
  height: '8vh',
  backgroundColor: appColors.black,
  zIndex: 1
}));

const SideBarStyle = styled(Box)(() => ({
  backgroundColor: appColors.black,
  width: '13vw',
  position: 'fixed',
  left: 0,
  top: '8vh',
  padding: '10px 0',
  zIndex: 1,
  height: '92vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const IconContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer'
}));
