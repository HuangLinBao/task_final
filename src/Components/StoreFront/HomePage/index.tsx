import * as React from 'react';
import { Box } from '@mui/material';

import ListView from './ListView/index.tsx';
import ProductCard from './ProductCard/index.tsx';
import { useProducts } from '../../Hooks/useProduct/index.tsx';

type Product = {
	id: string;
	name: string;
	img: string;
	price: string;
};
type Props = React.PropsWithChildren & {
	'data-testid'?: string;
};

const HomePage: React.FC<Props> = (props) => {
	const { data, error, isLoading } = useProducts();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	return (
		<Box {...props} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' }}>
			<ListView data-testid='listView'>
				{data.map((product: Product) => {
					if (!product) return null; // or return a default component
					return <ProductCard key={product.id} data-testid='productCard' product={product} />;
				})}
			</ListView>
		</Box>
	);
};

export default HomePage;
