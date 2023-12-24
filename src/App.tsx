import './App.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import StoreFront from './Components/StoreFront/index.tsx';

type Props = PropsWithChildren & {
	'data-testid'?: string;
};
const queryClient = new QueryClient();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
const App: React.FC<Props> = ({ ...props }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={darkTheme}>
				<StoreFront {...props} data-testid='storeFrontID' />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default App;
