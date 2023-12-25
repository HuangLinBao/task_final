import { render, screen } from '@testing-library/react';

import ThemeToggle from '../index.tsx';

describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<ThemeToggle />);
		const toggle = screen.getByTestId('toggle');
		expect(toggle).toBeInTheDocument();
	});
});
