import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('Logo link points to the correct page', () => {
    setup();
    const link = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts?/i }),
    ).toBeInTheDocument();
  });

  test('"Search" link points to the correct page', () => {
    setup();
    const link = screen.getByRole('link', { name: /Search/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /Find the best time for a subreddit/i }),
    ).toBeInTheDocument();
  });
});

describe('Footer', () => {
  test('Logo link points to the correct page', () => {
    setup();
    const link = screen.getByRole('link', { name: /sign.svg/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts?/i }),
    ).toBeInTheDocument();
  });

  test('"Terms" link points to the correct page', () => {
    setup();
    const link = screen.getByRole('link', { name: /Terms & Privacy/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /Terms/i }),
    ).toBeInTheDocument();
  });

  test('"Profy.dev" link points to the correct page', () => {
    setup();
    expect(screen.getByText('profy.dev').closest('a')).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
