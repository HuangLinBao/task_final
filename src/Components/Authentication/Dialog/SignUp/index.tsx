import * as React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { defaultRegister, registerSchema } from '../../Validation/UserValidation.ts';

type Props = React.PropsWithChildren & {
	'data-testid'?: string;
};

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	repeatPassword: string;
};

// TODO: add the loading button for when we implement authentication
const SignUpForm: React.FC<Props> = (props) => {
	const { control, handleSubmit } = useForm({
		defaultValues: defaultRegister,
		resolver: yupResolver(registerSchema),
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
					name='firstName'
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Box>
								{fieldState.invalid && (
									<Typography variant='caption' color='error'>
										{fieldState.error?.message}
									</Typography>
								)}
								<TextField
									data-testid='first-name'
									required
									id={field.name}
									label='First Name'
									variant='outlined'
									value={field.value}
									onChange={field.onChange}
								/>
							</Box>
						</>
					)}
				/>
				<Controller
					name='lastName'
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Box>
								{fieldState.invalid && (
									<Typography variant='caption' color='error'>
										{fieldState.error?.message}
									</Typography>
								)}
								<TextField
									data-testid='last-name'
									required
									id={field.name}
									label='Last Name'
									variant='outlined'
									value={field.value}
									onChange={field.onChange}
								/>
							</Box>
						</>
					)}
				/>
				<Controller
					name='email'
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Box>
								{fieldState.invalid && (
									<Typography variant='caption' color='error'>
										{fieldState.error?.message}
									</Typography>
								)}
								<TextField
									data-testid='email'
									required
									id={field.name}
									label='Email'
									variant='outlined'
									value={field.value}
									onChange={field.onChange}
								/>
							</Box>
						</>
					)}
				/>
				<Controller
					name='password'
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Box>
								{fieldState.invalid && (
									<Typography variant='caption' color='error'>
										{fieldState.error?.message}
									</Typography>
								)}
								<TextField
									data-testid='password'
									required
									id={field.name}
									label='Password'
									variant='outlined'
									type='password'
									value={field.value}
									onChange={field.onChange}
								/>
							</Box>
						</>
					)}
				/>
				<Controller
					name='repeatPassword'
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Box>
								{fieldState.invalid && (
									<Typography variant='caption' color='error'>
										{fieldState.error?.message}
									</Typography>
								)}
								<TextField
									data-testid='repeat-password'
									required
									id={field.name}
									label='Repet Password'
									variant='outlined'
									type='password'
									value={field.value}
									onChange={field.onChange}
								/>
							</Box>
						</>
					)}
				/>
				<Button data-testid='submit' type='submit' variant='contained'>
					Register
				</Button>
			</Box>
		</form>
	);
};

export default SignUpForm;
