import './App.scss';
import React, { PropsWithChildren } from 'react';
import { initializeApp } from 'firebase/app';

import StoreFront from './Components/StoreFront/index.tsx';
import AppProvider from './Components/Providers/index.tsx';
import firebaseConfig from './firebase/FirebaseConfig.ts';

initializeApp(firebaseConfig);
type Props = PropsWithChildren & object;

const App: React.FC<Props> = ({ ...props }) => {
	return (
		<AppProvider>
			<StoreFront {...props} data-testid='storeFrontID' />
		</AppProvider>
	);
};

export default App;
