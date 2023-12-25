import './App.scss';

import React, { PropsWithChildren } from 'react';

import StoreFront from './Components/StoreFront/index.tsx';
import AppProvider from './Components/Providers/index.tsx';

type Props = PropsWithChildren & object;

const App: React.FC<Props> = ({ ...props }) => {
	return (
		<AppProvider>
			<StoreFront {...props} data-testid='storeFrontID' />
		</AppProvider>
	);
};

export default App;
