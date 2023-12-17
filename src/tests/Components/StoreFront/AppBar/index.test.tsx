import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppBar } from '@mui/material';

test('render the AppBar', () => {
	render(<AppBar />);
});
