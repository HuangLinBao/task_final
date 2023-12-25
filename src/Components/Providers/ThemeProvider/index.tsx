import React, { PropsWithChildren, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme/index.tsx';
import { themeContext, toggleMode } from './ThemeContext/index.tsx';

type Props = PropsWithChildren;

const ThemeWrapper: React.FC<Props> = (props) => {
	const { children } = props;
	const [currentTheme, setCurrentTheme] = useState(theme);
	return (
		<>
			<ThemeProvider theme={currentTheme}>
				<CssBaseline />
				<themeContext.Provider
					value={{
						mode: currentTheme.palette.mode,
						toggleMode: () => toggleMode(setCurrentTheme),
					}}>
					<main>{children}</main>
				</themeContext.Provider>
			</ThemeProvider>
		</>
	);
};

export default ThemeWrapper;
