import './App.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

import StoreFront from './Components/StoreFront/index.tsx';

type Props = object;
const queryClient = new QueryClient();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
const App: React.FC<Props> = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={darkTheme}>
				<StoreFront data-test-id='storeFrontID' />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default App;
