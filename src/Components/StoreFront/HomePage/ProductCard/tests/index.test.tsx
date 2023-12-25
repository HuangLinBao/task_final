import { render, screen } from '@testing-library/react';

import ProductCard from '../index.tsx';

describe('Simple home page test', () => {
	it('the products list is visible', () => {
		render(<ProductCard />);
		const card = screen.getByTestId('card');
		const price = screen.getByTestId('price');
		expect(card).toBeInTheDocument();
		expect(price).toBeInTheDocument();
	});
});
