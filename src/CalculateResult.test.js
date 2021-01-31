import { render, screen } from '@testing-library/react';
import CalculateResult from './CalculateResult';

test('renders CalculateResult', () => {
  render(<CalculateResult />);
  const element = screen.getByText(/This component is CalculateResult./i);
  expect(element).toBeInTheDocument();
});
