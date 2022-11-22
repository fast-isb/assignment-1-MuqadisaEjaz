import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './navbar/Navbar'

test('Task01', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId('Header');
  expect(linkElement).toHaveTextContent(/Dashboard/);
});