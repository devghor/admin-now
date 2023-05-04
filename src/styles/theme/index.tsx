import { PaletteMode, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import React from 'react'
import typography from './typography'
import shadows from './shadows'

export const COLOR_PRIMARY_MAIN = '#E51A4C'
export const COLOR_SECONDARY_MAIN = '#19857b'

const lightThemeConfig = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: COLOR_PRIMARY_MAIN,
    },
    secondary: {
      main: COLOR_SECONDARY_MAIN,
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
    background: {
      default: '#f1f5f9',
    },
  },
  shape: { borderRadius: 6, ...shadows },
  typography: {
    ...typography,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLOR_PRIMARY_MAIN,
          color: '#fff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 48,
          minHeight: 48,
        },
      },
    },
  },
}

const darkThemeConfig = {
  palette: {
    mode: 'dark' as PaletteMode,
  },
  typography: {
    ...typography,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 48,
          minHeight: 48,
        },
      },
    },
  },
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

type Props = {
  children: React.ReactElement
}

export function MuiThemeProvider({ children }: Props) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        ...(mode === 'light' ? lightThemeConfig : darkThemeConfig),
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
