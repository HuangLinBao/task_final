import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import LogoutButton from '../index.tsx';

describe('Login Button test', () => {
	it('the login button is visible', () => {
		render(<LogoutButton onClick={() => {}} />);
		const button = screen.getByTestId('btn');
		expect(button).toBeInTheDocument();
	});
	it('calls onClick when the button is clicked', () => {
		const mockOnClick = vi.fn();
		render(<LogoutButton onClick={mockOnClick} />);
		const logoutButton = screen.getByTestId('btn');
		fireEvent.click(logoutButton);
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
