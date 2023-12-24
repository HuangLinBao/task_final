import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import SearchAppBar from './AppBar/index.tsx';

type Props = PropsWithChildren & {
	'data-testid'?: string;
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
};
const StoreFront: React.FC<Props> = ({ ...props }) => {
	return (
		<div {...props}>
			<SearchAppBar data-testid='appBarSearch' setTheme={props.setTheme} theme={props.theme} />
		</div>
	);
};

export default StoreFront;
