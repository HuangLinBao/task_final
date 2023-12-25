import { Theme, createTheme } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';

export const defaultMode = 'dark';

export const themeContext = React.createContext({
	mode: defaultMode,
	toggleMode: () => {},
});

export const toggleMode = (setTheme: Dispatch<SetStateAction<Theme>>) => {
	setTheme((oldTheme: Theme) => {
		// you can use localStorage
		// window.sessionStorage.setItem(
		//   "themeMode",
		//   `${oldTheme.palette.type === "dark" ? "light" : "dark"}`
		// );
		return createTheme({
			...oldTheme,
			palette: {
				primary: {
					main: oldTheme.palette.primary.main,
				},
				secondary: {
					main: oldTheme.palette.secondary.main,
				},
				mode: oldTheme.palette.mode === 'dark' ? 'light' : 'dark',
			},
		});
	});
};
