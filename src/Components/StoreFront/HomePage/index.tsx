import * as React from 'react';
import { Box } from '@mui/material';

import ListView from './ListView/index.tsx';
import ProductCard from './ProductCard/index.tsx';

type Props = React.PropsWithChildren & {
	'data-testid'?: string;
};

const HomePage: React.FC<Props> = ({ ...props }) => {
	return (
		<Box {...props}>
			<ListView>
				<ProductCard />
			</ListView>
		</Box>
	);
};

export default HomePage;
