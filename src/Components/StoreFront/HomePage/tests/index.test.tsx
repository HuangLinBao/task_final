import { render, screen } from '@testing-library/react';

import HomePage from '../index.tsx';

describe('Simple home page test', () => {
	it('the products list is visible', () => {
		render(<HomePage />);
		const listView = screen.getByTestId('listView');
		expect(listView).toBeInTheDocument();
	});
});
