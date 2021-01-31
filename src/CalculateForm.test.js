import { render, screen } from '@testing-library/react';
import CalculateForm from './CalculateForm';

test('renders CalculateForm', () => {
  render(<CalculateForm />);
  const element = screen.getByText(/This component is CalculateForm./i);
  expect(element).toBeInTheDocument();
});
