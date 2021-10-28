import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  function handleClick() {
    history.push('/search/javascript');
  }

  return (
    <Wrapper>
      <Link to="/"><Logo src="logo.svg" alt="logo.svg" /></Link>
      <Navigation>
        <Link to="/search/javascript" onClick={handleClick}>Search</Link>
        <NavLink href="#how-it-works">How it works</NavLink>
        <NavLink href="#about">About</NavLink>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
display: grid;
grid-auto-flow: column;
height: 100px;
justify-content: space-between;
align-items: center;
padding-right:80px;
padding-left: 80px;
`;

const Logo = styled.img`
display: block;
`;

const Navigation = styled.div`
display: grid;
grid-auto-flow: column;
align-items: center;
gap:25px`;

const NavLink = styled.a``;
