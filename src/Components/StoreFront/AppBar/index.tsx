import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React, { PropsWithChildren } from 'react';

import SearchBar from './SearchBar/index.tsx';
import LoginButton from './LoginButton/index.tsx';

const TypographyStyle = { flexGrow: 1, display: { xs: 'none', sm: 'block' } };
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
					<Typography variant='h6' noWrap component='div' sx={TypographyStyle}>
						MUI
					</Typography>
					<SearchBar data-testid='searchBar' />
					<LoginButton data-testid='buttonLogin' />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default SearchAppBar;
