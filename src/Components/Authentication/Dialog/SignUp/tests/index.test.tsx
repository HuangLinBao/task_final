import { render, screen } from '@testing-library/react';

import SignUpForm from '../index.tsx';

describe('Simple StoreFront test', () => {
	it('the storefront is visible', () => {
		render(<SignUpForm />);
		const firstName = screen.getByTestId('first-name');
		const lastName = screen.getByTestId('last-name');
		const email = screen.getByTestId('email');
		const password = screen.getByTestId('password');
		const repeatPassword = screen.getByTestId('repeat-password');
		const submit = screen.getByTestId('submit');
		expect(firstName).toBeInTheDocument();
		expect(lastName).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
		expect(repeatPassword).toBeInTheDocument();
		expect(submit).toBeInTheDocument();
	});
});
