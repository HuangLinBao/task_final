import './App.scss';

import React, { PropsWithChildren, useState } from 'react';

import StoreFront from './Components/StoreFront/index.tsx';
import AppProvider from './Components/Provider/index.tsx';

type Props = PropsWithChildren & object;

const App: React.FC<Props> = ({ ...props }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<AppProvider theme={darkTheme}>
			<StoreFront theme={darkTheme} setTheme={setDarkTheme} {...props} data-testid='storeFrontID' />
		</AppProvider>
	);
};

export default App;
