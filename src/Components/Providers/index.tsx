import React, { PropsWithChildren } from 'react';

import ClientProvider from './QueryProvider/index.tsx';
import ThemeWrapper from './ThemeProvider/index.tsx';

type Props = PropsWithChildren;

const AppProvider: React.FC<Props> = ({ ...props }) => {
	const { children } = props;
	return (
		<ClientProvider>
			<ThemeWrapper>{children}</ThemeWrapper>
		</ClientProvider>
	);
};

export default AppProvider;
