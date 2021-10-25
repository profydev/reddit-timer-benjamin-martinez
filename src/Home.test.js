import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Home from './pages/Home';
import Search from './pages/Search';

function setup() {
  return render(
    <MemoryRouter>
      <Home />
      <Search />
    </MemoryRouter>,
  );
}

describe('Hero Section', () => {
    test('"Show me the best time" button points to the correct page', () => {
      setup();
      const link = screen.getByRole('link', { name: /Show me the best time/i });
      screen.debug(link);
      userEvent.click(link);
      screen.debug();
      expect(
        screen.getByText('Search'),
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
