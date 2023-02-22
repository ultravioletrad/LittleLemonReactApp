import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders main and footer components', () => {
    const { getByTestId } = render(<App />);
    const mainComponent = getByTestId('main-component');
    const footerComponent = getByTestId('footer-component');
    expect(mainComponent).toBeInTheDocument();
    expect(footerComponent).toBeInTheDocument();
  });
});
