import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren;
const queryClient = new QueryClient();

const ClientProvider: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
};

export default ClientProvider;
