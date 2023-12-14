import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoreFront from '../Components/StoreFront';


test('renders App', () => {
  render(<><StoreFront></StoreFront></>);

  
});