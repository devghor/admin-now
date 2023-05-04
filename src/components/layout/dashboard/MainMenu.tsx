import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  DashboardOutlined,
  ListAltOutlined,
  StarOutline,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { pathConstant } from '../../../constants'

const items = [
  {
    icon: <DashboardOutlined sx={{ color: '#fff' }} />,
    ...pathConstant.DASHBOARD,
  },
  {
    icon: <ListAltOutlined sx={{ color: '#fff' }} />,
    label: 'Acl',
    path: '#',
    sub: [
      {
        icon: <StarOutline sx={{ color: '#fff' }} />,
        ...pathConstant.ACL_ROLES,
      },
      {
        icon: <StarOutline sx={{ color: '#fff' }} />,
        ...pathConstant.ACL_USER_ROLES,
      },
      {
        icon: <StarOutline sx={{ color: '#fff' }} />,
        ...pathConstant.ACL_PERMISSIONS,
      },
    ],
  },
]

const ListItem = ({
  icon,
  label,
  children,
  path,
}: {
  icon?: React.ReactElement
  label?: string
  children?: any
  path?: any
}) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

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
  )
  return item
}

export default function MainMenu() {
  const navigate = useNavigate()

  const handleBtnClick = (path: string | undefined) => {
    if (path !== undefined && path !== null) {
      navigate(path)
    }
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
      {items.map((item, j) => {
        if (item.sub) {
          return (
            <ListItem key={j} label={item.label} icon={item.icon}>
              {item.sub.map((subItem: any, i) => {
                return (
                  <ListItemButton
                    key={i}
                    sx={{ pl: 4 }}
                    onClick={() => handleBtnClick(subItem.path)}
                  >
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItemButton>
                )
              })}
            </ListItem>
          )
        }
        return (
          <ListItemButton key={j} onClick={() => handleBtnClick(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        )
      })}
    </List>
  )
}
