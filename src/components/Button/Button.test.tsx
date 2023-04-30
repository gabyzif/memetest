import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  test('renders with text prop', () => {
    render(<Button text="Click me" href="/some-url" />);
    const button = screen.getByRole('link', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  test('renders with children prop', () => {
    render(<Button href="/some-url">Click me</Button>);
    const button = screen.getByRole('link', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  test('renders with primary variant by default', () => {
    render(<Button href="/some-url" />);
    const button = screen.getByRole('link');
    expect(button).toHaveClass('bg-primary-light');
  });

  test('renders with secondary variant', () => {
    render(<Button href="/some-url" variant="secondary" />);
    const button = screen.getByRole('link');
    expect(button).toHaveClass('bg-secondary-light');
  });

  test('renders with tertiary variant', () => {
    render(<Button href="/some-url" variant="tertiary" />);
    const button = screen.getByRole('link');
    expect(button).toHaveClass('bg-tertiary-light');
  });

  test('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Button href="/some-url" onClick={onClick} />);
    const button = screen.getByRole('link');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
