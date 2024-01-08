import './App.scss';
import { initializeApp } from 'firebase/app';
import React, { PropsWithChildren } from 'react';
import { getAuth } from 'firebase/auth';

import StoreFront from './Components/StoreFront/index.tsx';
import AppProvider from './Components/Providers/index.tsx';
import { firebaseConfig } from './firebase/FireBaseConfig.ts';

type Props = PropsWithChildren & object;

const App: React.FC<Props> = ({ ...props }) => {
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	return (
		<AppProvider>
			<StoreFront {...props} data-testid='storeFrontID' />
		</AppProvider>
	);
};

export default App;
