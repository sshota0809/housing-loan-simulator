import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders Main', () => {
  render(<Main />);
  const elementForm = screen.getByText(/your age/i);
  expect(elementForm).toBeInTheDocument();
  const elementResult = screen.getByText(/This component is CalculateResult./i);
  expect(elementResult).toBeInTheDocument();
});
