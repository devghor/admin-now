import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  DashboardOutlined,
  ListAltOutlined,
  StarOutline,
} from '@mui/icons-material';
import { pathConstant } from '../../../constants';

const items = [
  { icon: <DashboardOutlined />, ...pathConstant.DASHBOARD },
  {
    icon: <ListAltOutlined />,
    label: 'Acl',
    path: '#',
    sub: [
      { icon: <StarOutline />, ...pathConstant.ACL_ROLES },
      { icon: <StarOutline />, ...pathConstant.ACL_USER_ROLES },
      {
        icon: <StarOutline />,
        ...pathConstant.ACL_PERMISSIONS,
      },
    ],
  },
];

const ListItem = ({
  icon,
  label,
  children,
  path,
}: {
  icon?: React.ReactElement;
  label?: string;
  children?: any;
  path?: any;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const item = children ? (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </div>
  ) : (
    <ListItemButton href={path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
  return item;
};

export default function MainMenu() {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
      {items.map((item, j) => {
        if (item.sub) {
          return (
            <ListItem key={j} label={item.label} icon={item.icon}>
              {item.sub.map((subItem: any, i) => {
                return (
                  <ListItemButton key={i} sx={{ pl: 4 }} href={subItem.path}>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItemButton>
                );
              })}
            </ListItem>
          );
        } else {
          return (
            <ListItem
              key={j}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          );
        }
      })}
    </List>
  );
}
