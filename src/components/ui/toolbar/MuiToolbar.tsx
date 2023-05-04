import { Toolbar } from '@mui/material'
import React from 'react'

type Props = {
  children?: React.ReactElement
}

const MuiToolbar = ({ children }: Props) => {
  return <Toolbar variant="dense">{children}</Toolbar>
}

export default MuiToolbar
