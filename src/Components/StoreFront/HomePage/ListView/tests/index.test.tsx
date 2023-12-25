import { render, screen } from '@testing-library/react';

import ListView from '../index.tsx';

describe('list view test', () => {
	it('the products list is visible', () => {
		render(<ListView />);
		const card = screen.getByTestId('card');
		expect(card).toBeInTheDocument();
	});
});
