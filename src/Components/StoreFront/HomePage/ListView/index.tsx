import React, { PropsWithChildren } from 'react';
import Paper from '@mui/material/Paper';

type Props = PropsWithChildren & {
	'data-testid'?: string;
};

const ListView: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<div {...props}>
			<Paper data-testid='list' elevation={0} sx={{ p: 1 }}>
				{children}
			</Paper>
		</div>
	);
};

export default ListView;
