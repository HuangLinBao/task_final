import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchAppBar from '../../../Components/StoreFront/AppBar';

test('renders storefront layout', () => {
  render(<><SearchAppBar></SearchAppBar></>);

  
});