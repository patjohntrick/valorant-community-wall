import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export const API_URL = 'https://valorant-api.com/v1/';

type listProp = {
  nameList: string;
  route: string;
  moduleIcon: string;
};

export const lists: listProp[] = [
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
