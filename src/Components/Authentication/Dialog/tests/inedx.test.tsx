import { render, screen } from '@testing-library/react';

import AuthDialog from '../index.tsx';

describe(' Dialog test', () => {
	it('the dialog is visible', () => {
		render(<AuthDialog open handleclickclose={() => {}} />);
		const title = screen.getByTestId('dialogTitle');
		const loginSection = screen.getByTestId('login');
		const signUpSection = screen.getByTestId('signup');
		const LoginForm = screen.getByTestId('login-form');
		const SignUpForm = screen.getByTestId('signup-form');
		expect(title).toBeInTheDocument();
		expect(loginSection).toBeInTheDocument();
		expect(signUpSection).toBeInTheDocument();
		expect(LoginForm).toBeInTheDocument();
		expect(SignUpForm).toBeInTheDocument();
	});
});
