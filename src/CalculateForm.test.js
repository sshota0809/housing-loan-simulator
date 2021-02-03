import { render, screen } from '@testing-library/react';
import CalculateForm from './CalculateForm';

test('renders CalculateForm', () => {
  render(<CalculateForm />);
  const element = screen.getByText(/your age/i);
  expect(element).toBeInTheDocument();
});
