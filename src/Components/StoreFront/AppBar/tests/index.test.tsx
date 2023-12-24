import { render, screen } from '@testing-library/react';

import SearchAppBar from '../index.tsx';

describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<SearchAppBar theme={false} setTheme={() => {}} />);
		const searchBar = screen.getByTestId('searchBar');
		const loginButton = screen.getByTestId('buttonLogin');
		expect(searchBar).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
	});
});
