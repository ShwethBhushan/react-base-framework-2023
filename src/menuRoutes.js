import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EngineeringIcon from '@mui/icons-material/Engineering';
// Material Dashboard 2 React layouts
import Dashboard from './layouts/dashboard';
import Tables from './containers/tables';
import Notifications from './layouts/NotificationItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

// @mui icons
import Icon from '@mui/material/Icon';
import AudienceSegment from './layouts/AudienceSegment';
import AudienceMaitanance from './components/Features/AudienceMaintanance';
const definedRoutesSideNav = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <HomeIcon />,
    route: '/dashboard',
    component: <Dashboard />,
  },
  {
    type: 'collapse',
    name: 'Export',
    key: 'export',
    icon: <ExitToAppIcon />,
    route: '/export',
    component: null,
  },
  {
    type: 'collapse',
    name: 'Profile',
    key: 'profile',
    icon: <PersonIcon />,
    route: '/profile',
    component: null,
  },
  {
    type: 'collapse',
    name: 'Settings',
    key: 'settings',
    icon: <SettingsIcon />,
    route: '/settings',
    component: null,
  },
];

export default definedRoutesSideNav;
