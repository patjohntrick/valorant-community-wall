import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export const API_URL = 'https://valorant-api.com/v1/';

type listProp = {
  nameList: string;
  route: string;
  moduleIcon?: any;
  isSeparte?: boolean;
};

export const lists: listProp[] = [
  {
    nameList: 'home',
    route: '/',
    moduleIcon: 'AccessibilityNewIcon',
    isSeparte: true
  },
  {
    nameList: 'agents',
    route: '/agents',
    moduleIcon: 'AccessibilityNewIcon'
  },
  {
    nameList: 'events',
    route: '/events',
    moduleIcon: 'EventIcon'
  },
  {
    nameList: 'maps',
    route: '/maps',
    moduleIcon: 'MapIcon'
  },
  {
    nameList: 'bundles',
    route: '/bundles',
    moduleIcon: 'GroupWorkIcon'
  }
];

export const Messages = {
  REQUIRED_USERNAME: 'Username is required.',
  REQUIRED_EMAIL: 'Email is required.',
  REQUIRED_PASSWORD: 'Password is required.',
  ERROR_CONFIRM_PASSWORD: 'Password should match'
};
