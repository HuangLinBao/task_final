import * as React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { defaultLogin, loginSchema } from '../../Validation/UserValidation.ts';

type Props = React.PropsWithChildren & {
	'data-testid'?: string;
};
type FormData = {
	email: string;
	password: string;
};
// TODO: add the loading button for when we implement authentication
const LoginForm: React.FC<Props> = (props) => {
	const { control, handleSubmit } = useForm({
		defaultValues: defaultLogin,
		resolver: yupResolver(loginSchema),
		mode: 'onChange',
	});
	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		// Handle form submission
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				{...props}
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				autoComplete='off'>
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<TextField
							data-testid='email'
							id={field.name}
							label='Email'
							variant='outlined'
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				/>
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<TextField
							data-testid='password'
							id={field.name}
							label='Password'
							variant='outlined'
							type='password'
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				/>
				<Button type='submit' data-testid='submit' variant='contained'>
					Login
				</Button>
			</Box>
		</form>
	);
};

export default LoginForm;
