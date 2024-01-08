import { render, screen } from '@testing-library/react';

import LoginForm from '../index.tsx';

describe('Simple StoreFront test', () => {
	it('the storefront is visible', () => {
		render(<LoginForm />);
		const email = screen.getByTestId('email');
		const password = screen.getByTestId('password');
		const submit = screen.getByTestId('submit');
		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
		expect(submit).toBeInTheDocument();
	});
});
