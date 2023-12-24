import { render, screen } from '@testing-library/react';

import StoreFront from '../index.tsx';

describe('Simple StoreFront test', () => {
	it('the storefront is visible', () => {
		render(<StoreFront theme={false} setTheme={() => {}} />);
		const appBar = screen.getByTestId('appBarSearch');
		expect(appBar).toBeInTheDocument();
	});
});
