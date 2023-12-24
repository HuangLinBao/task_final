import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	theme: boolean;
};
const queryClient = new QueryClient();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
const lightTheme = createTheme({
	palette: {
		mode: 'light',
	},
});
const AppProvider: React.FC<Props> = ({ ...props }) => {
	const { theme, children } = props;
	const currentTheme = theme ? darkTheme : lightTheme;
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default AppProvider;
