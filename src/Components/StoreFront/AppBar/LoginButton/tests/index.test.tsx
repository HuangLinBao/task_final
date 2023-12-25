import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import LoginButton from '../index.tsx';

describe('Login Button test', () => {
	it('the login button is visible', () => {
		render(<LoginButton onClick={() => {}} />);
		const button = screen.getByTestId('btn');
		expect(button).toBeInTheDocument();
	});
	it('calls onClick when the button is clicked', () => {
		const mockOnClick = vi.fn();
		render(<LoginButton onClick={mockOnClick} />);
		const loginButton = screen.getByText(/login/i);
		fireEvent.click(loginButton);
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
