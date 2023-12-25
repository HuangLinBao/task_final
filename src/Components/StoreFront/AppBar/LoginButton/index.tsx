import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	'data-testid'?: string;
	onClick: () => void;
};

const LoginButton: React.FC<Props> = (props) => {
	return (
		<div {...props}>
			<Button data-testid='btn' sx={{ ml: 2 }} color='inherit'>
				Login
			</Button>
		</div>
	);
};

export default LoginButton;
