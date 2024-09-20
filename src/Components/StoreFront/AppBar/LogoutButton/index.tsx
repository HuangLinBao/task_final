import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	'data-testid'?: string;
	onClick: () => void;
};

const LogoutButton: React.FC<Props> = (props) => {
	return (
		<div {...props}>
			<Button data-testid='btn' sx={{ ml: 2 }} color='inherit'>
				Logout
			</Button>
		</div>
	);
};

export default LogoutButton;