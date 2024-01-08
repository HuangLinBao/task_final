import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Tab, Tabs } from '@mui/material';

import TabPanel, { a11yProps } from './Tabs/index.tsx';
import LoginForm from './Login/index.tsx';
import SignUpForm from './SignUp/index.tsx';

type Props = React.PropsWithChildren & {
	'data-testid'?: string;
	open: boolean;
	handleclickclose: () => void;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const AuthDialog: React.FC<Props> = (props) => {
	const { open, handleclickclose } = props;
	const [value, setValue] = React.useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div {...props}>
			<BootstrapDialog onClose={handleclickclose} aria-labelledby='customized-dialog-title' open={open}>
				<DialogTitle data-testid='dialogTitle' sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
					Modal title
				</DialogTitle>
				<IconButton
					aria-label='close'
					onClick={handleclickclose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
						<Tab data-testid='login' label='Login' {...a11yProps(0)} />
						<Tab data-testid='signup' label='Sign Up' {...a11yProps(1)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						<LoginForm data-testid='login-form' />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<SignUpForm data-testid='signup-form' />
					</TabPanel>
				</DialogContent>
				<DialogActions>
					{/* TODO: Implement this alert thing */}
					<Alert severity='success'>This is a success alert — check it out!</Alert>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
};

export default AuthDialog;
