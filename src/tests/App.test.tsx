import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import StoreFront from '../Components/StoreFront/index.tsx';

test('renders App', () => {
	render(<StoreFront />);
});
