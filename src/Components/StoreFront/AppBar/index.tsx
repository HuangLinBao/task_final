import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React, { PropsWithChildren, useReducer } from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

import AuthDialog from '../../Authentication/Dialog/index.tsx';

import SearchBar from './SearchBar/index.tsx';
import LoginButton from './LoginButton/index.tsx';
import ThemeToggle from './ThemeToggle/index.tsx';
import LogoutButton from './LogoutButton/index.tsx';
import { useLogout } from '../../../firebase/Authentication.ts';

const TypographyStyle = styled(Typography)(() => ({
	flexGrow: 1,
	display: 'block',
}));
type Props = PropsWithChildren & {
	'data-testid'?: string;
};

const SearchAppBar: React.FC<Props> = ({ ...props }) => {
	const [user] = useAuthState(auth);
	const toggle = (state: boolean) => {
		return !state;
	};
	const [isOpen, toggleIsOpen] = useReducer(toggle, false);
	const { mutate: logout } = useLogout();
	const handleLogout = () => {
		logout();
	};

	return (
		<>
			<Box {...props} sx={{ flexGrow: 1 }}>
				<AppBar data-testid='appBar' position='static'>
					<Toolbar>
						<IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<TypographyStyle variant='h6' noWrap sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
							MUI
						</TypographyStyle>
						<SearchBar data-testid='searchBar' />
						{user ? (
							<LogoutButton onClick={handleLogout} data-testid='buttonLogout' />
						) : (
							<LoginButton onClick={toggleIsOpen} data-testid='buttonLogin' />
						)}
						<ThemeToggle data-testid='theme-toggle' />
					</Toolbar>
				</AppBar>
			</Box>
			<AuthDialog data-testid='authDialog' open={isOpen} handleclickclose={toggleIsOpen} />
		</>
	);
};

export default SearchAppBar;
