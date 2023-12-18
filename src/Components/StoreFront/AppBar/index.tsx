import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

import SearchBar from './SearchBar/index.tsx';

const TypographyStyle = { flexGrow: 1, display: { xs: 'none', sm: 'block' } };

const SearchAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div' sx={TypographyStyle}>
						MUI
					</Typography>
					<SearchBar />
					<Button sx={{ ml: 2 }} color='inherit'>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default SearchAppBar;
