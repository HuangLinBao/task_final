import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	'data-testid'?: string;
};

const LoginButton: React.FC<Props> = ({ ...props }) => {
	return (
		<Button {...props} sx={{ ml: 2 }} color='inherit'>
			Login
		</Button>
	);
};

export default LoginButton;
