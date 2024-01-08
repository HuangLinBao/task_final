import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import SearchAppBar from '../index.tsx';

// TODO: use userEvent instead of fireEvent
describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<SearchAppBar />);
		const searchBar = screen.getByTestId('searchBar');
		const loginButton = screen.getByTestId('buttonLogin');
		const themeToggle = screen.getByTestId('theme-toggle');
		expect(searchBar).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
		expect(themeToggle).toBeInTheDocument();
	});
	it('opens authentication dialog when login button is clicked', async () => {
		render(<SearchAppBar />);
		const loginButton = screen.getByTestId('buttonLogin');
		act(() => {
			fireEvent.click(loginButton);
		});
		await waitFor(() => {
			const authDialog = screen.getByTestId('authDialog');
			expect(authDialog).toBeInTheDocument();
		});
	});
});
