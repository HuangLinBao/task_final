import './App.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import StoreFront from './Components/StoreFront/index.tsx';

const queryClient = new QueryClient();
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<StoreFront />
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default App;
