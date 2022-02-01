import { render, screen } from '@testing-library/react';
import App from './App';

test('What is your city name?', () => {
  render(<App />);
  const linkElement = screen.getByText(/What is your city name?/i);
  expect(linkElement).toBeInTheDocument();
});
