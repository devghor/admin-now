import { PaletteMode, ThemeProvider } from '@mui/material';
import { purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import typography from './typography';
import GlobalStyles from './GlobalStyles';

export const COLOR_PRIMARY_MAIN = red['500'];
export const COLOR_SECONDARY_MAIN = '#19857b';

const lightPalette = {
  primary: {
    main: COLOR_PRIMARY_MAIN,
  },
  secondary: {
    main: COLOR_SECONDARY_MAIN,
  },
};

const darkPalette = {};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
  },
  shape: { borderRadius: 6 },
  typography: {
    ...typography,
  },
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

type Props = {
  children: React.ReactElement;
};

export const MuiThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
