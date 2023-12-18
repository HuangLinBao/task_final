import { render, screen } from '@testing-library/react';

import SearchBar from '../index.tsx';

describe('Simple Search test', () => {
	it('the search bar is visible', () => {
		render(<SearchBar />);
		const search = screen.getByPlaceholderText('Search...');
		expect(search).toBeInTheDocument();
	});
});
