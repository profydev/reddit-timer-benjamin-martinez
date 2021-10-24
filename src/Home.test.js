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
  