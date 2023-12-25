import { createTheme } from '@mui/material';

import { defaultMode } from '../ThemeContext/index.tsx';

const theme = createTheme({
	palette: {
		// type: window.sessionStorage.getItem("themeMode") || defaultMode,

		mode: defaultMode,
		primary: {
			// light: will be calculated from palette.primary.main, if not given,
			main: '#ff4400',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			main: '#6d4c41',
			// dark: will be calculated from palette.secondary.main,
			// contrastText: '#ffcc00',
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
	},
});

export default theme;
