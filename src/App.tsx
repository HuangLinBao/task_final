import './App.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material';

import StoreFront from './Components/StoreFront/index.tsx';

const queryClient = new QueryClient();
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={darkTheme}>
				<StoreFront />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default App;
