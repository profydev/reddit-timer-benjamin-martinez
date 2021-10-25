import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Home from './pages/Home';

function setup() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

describe('Hero Section', () => {
  test('"Show me the best time" button points to the correct page', () => {
    setup();
    const link = screen.getByRole('link', { name: /Show me the best time/i });
    screen.debug(link);
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /Search/i }),
    ).toBeInTheDocument();
  });
});

describe('Info Section', () => {
  test('"Profy.dev" link points to the correct page', () => {
    setup();
    expect(screen.getByText(/profy.dev/i).closest('a')).toHaveAttribute('href', 'https://profy.dev');
  });

  test('"Click here for more information" link points to the correct page', () => {
    setup();
    expect(screen.getByText(/Click here for more information/i).closest('a')).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
