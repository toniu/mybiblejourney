import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  const { container } = render(<App />);
  // Check if the app renders
  expect(container).toBeInTheDocument();
});

test('renders navigation bar', () => {
  render(<App />);
  // Check if navigation links are present (using getAllByText since "Home" might appear multiple times)
  const homeLinks = screen.queryAllByText(/Home/i);
  expect(homeLinks.length).toBeGreaterThan(0);
});
