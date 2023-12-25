import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import SearchAppBar from './AppBar/index.tsx';
import HomePage from './HomePage/index.tsx';

type Props = PropsWithChildren & {
	'data-testid'?: string;
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
};
const StoreFront: React.FC<Props> = ({ ...props }) => {
	return (
		<div {...props}>
			<SearchAppBar data-testid='appBarSearch' setTheme={props.setTheme} theme={props.theme} />
			<HomePage />
		</div>
	);
};

export default StoreFront;
