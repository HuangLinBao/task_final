import React, { PropsWithChildren } from 'react';

import SearchAppBar from './AppBar/index.tsx';
import HomePage from './HomePage/index.tsx';

type Props = PropsWithChildren & {
	'data-testid'?: string;
};
const StoreFront: React.FC<Props> = ({ ...props }) => {
	return (
		<div {...props}>
			<SearchAppBar data-testid='appBarSearch' />
			<HomePage />
		</div>
	);
};

export default StoreFront;
