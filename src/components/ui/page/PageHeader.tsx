import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PagePath } from '../../../types'

interface Props {
  title: string
  paths?: PagePath[]
  rightSection?: React.ReactElement
}

export const PageHeader = ({ title, paths, rightSection }: Props) => {
  const navigate = useNavigate()
  const handleClick = (path: any) => {
    navigate(path)
  }
  return (
    <Box
      sx={{
        width: '100%',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h2">{title}</Typography>
        <div>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            {paths?.map((item, i) => {
              return (
                <div key={i}>
                  {paths.length - 1 === i ? (
                    <Link
                      component="button"
                      underline="hover"
                      color="text.primary"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      component="button"
                      underline="hover"
                      color="inherit"
                      onClick={() => handleClick(item.path)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </Breadcrumbs>
        </div>
      </Box>
      <Box>{rightSection}</Box>
    </Box>
  )
}
