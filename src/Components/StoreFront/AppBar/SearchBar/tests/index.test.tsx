import { render, screen } from '@testing-library/react';

import SearchBar from '../index.tsx';

describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<SearchBar />);
		const search = screen.getByPlaceholderText('Search...');
		expect(search).toBeInTheDocument();
	});
});
