import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the heading in the app page', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Jamie Carter/i);
  expect(heading).toBeInTheDocument();
});

// test('', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
