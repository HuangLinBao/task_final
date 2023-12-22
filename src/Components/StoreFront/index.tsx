import React from 'react';

import SearchAppBar from './AppBar/index.tsx';

type Props = object;
const StoreFront: React.FC<Props> = () => {
	return <SearchAppBar data-test-id='appBarSearch' />;
};

export default StoreFront;
