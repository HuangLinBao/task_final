import { render, screen } from '@testing-library/react';

import ListView from '../index.tsx';
import ProductCard from '../../ProductCard/index.tsx';

describe('list view test', () => {
	it('the products list is visible', () => {
		render(
			<ListView>
				<ProductCard data-testid='productCard' />
			</ListView>
		);
		const card = screen.getByTestId('productCard');
		expect(card).toBeInTheDocument();
	});
});
