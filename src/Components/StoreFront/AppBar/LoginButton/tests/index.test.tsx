import { render, screen } from '@testing-library/react';

import LoginButton from '../index.tsx';

describe('Simple Search test', () => {
	it('the search bar is visible', () => {
		render(<LoginButton />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});
