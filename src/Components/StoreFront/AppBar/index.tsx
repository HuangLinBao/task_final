import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';
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
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
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
						MUI
					</TypographyStyle>
					<SearchBar data-testid='searchBar' />
					<LoginButton data-testid='buttonLogin' />
					<ThemeToggle theme={props.theme} setTheme={props.setTheme} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default SearchAppBar;
