import { render } from '@testing-library/react';

import App from '../App.tsx';

describe('Simple working test', () => {
	it('the title is visible', () => {
		render(<App />);
		// TODO add extra test but I need to know exactly if it's a better practice to use the query `GetByTestID` in react-testing-library
	});
});
