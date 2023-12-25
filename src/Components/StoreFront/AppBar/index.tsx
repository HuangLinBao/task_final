import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar/index.tsx';
import LoginButton from './LoginButton/index.tsx';
import ThemeToggle from './ThemeToggle/index.tsx';

const TypographyStyle = styled(Typography)(() => ({
	flexGrow: 1,
	display: 'block',
}));
type Props = PropsWithChildren & {
	'data-testid'?: string;
};

const SearchAppBar: React.FC<Props> = ({ ...props }) => {
	return (
		<Box {...props} sx={{ flexGrow: 1 }}>
			<AppBar data-testid='appBar' position='static'>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<TypographyStyle variant='h6' noWrap component='div'>
						Welcome To Our Humble Store
					</TypographyStyle>
					<SearchBar data-testid='searchBar' />
					<LoginButton onClick={() => {}} data-testid='buttonLogin' />
					<ThemeToggle data-testid='theme-toggle' />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default SearchAppBar;
