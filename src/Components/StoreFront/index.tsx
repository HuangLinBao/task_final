import React, { PropsWithChildren } from 'react';

import SearchAppBar from './AppBar/index.tsx';

type Props = PropsWithChildren & {
	'data-testid'?: string;
};
const StoreFront: React.FC<Props> = ({ ...props }) => {
	return (
		<div {...props}>
			<SearchAppBar data-testid='appBarSearch' />
		</div>
	);
};

export default StoreFront;
