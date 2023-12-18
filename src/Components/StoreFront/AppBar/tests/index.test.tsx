import { render, screen } from '@testing-library/react';

import SearchAppBar from '../index.tsx';

describe('Simple AppBar test', () => {
	it('the app bar is visible', () => {
		render(<SearchAppBar />);
		const appBar = screen.getByRole('banner');
		expect(appBar).toBeInTheDocument();
	});
});
