import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';
import React from "react"
import userEvent from '@testing-library/user-event';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

//Header test
describe('Header', () => {
  test('Logo link points to the correct page', () => {
    setup();
    
    const link = screen.getByRole('link', { name: /logo.svg/i });
    screen.debug(link);
    userEvent.click(link);
    
    expect(
      screen.getByRole('heading', { name: /Home/i })
    ).toBeInTheDocument();
  });

  test('"Search" link points to the correct page', () => {
    setup()
    
    const link = screen.getByRole('link', { name: /Search/i });
    userEvent.click(link);
    
    expect(
      screen.getByRole('heading', { name: /Search/i })
    ).toBeInTheDocument();
  });

});
