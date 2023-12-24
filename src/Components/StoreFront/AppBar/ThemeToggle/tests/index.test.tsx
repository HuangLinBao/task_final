import { render, screen } from '@testing-library/react';

import ThemeToggle from '../index.tsx';

describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<ThemeToggle theme={false} setTheme={() => {}} />);
		const toggle = screen.getByTestId('themeSwitch');
		expect(toggle).toBeInTheDocument();
	});
});
