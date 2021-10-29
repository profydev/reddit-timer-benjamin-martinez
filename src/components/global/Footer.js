import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Wrapper>
      <a href="https://profy.dev/employers" target="_blank" rel="noreferrer">profy.dev</a>
      <Link to="/" style={{ justifySelf: 'center' }}><Logo src="/sign.svg" alt="sign.svg" /></Link>
      <Link to="/terms" style={{ justifySelf: 'right' }}>Terms & Privacy</Link>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
display: grid;
height: 100px;
grid-template-columns: 1fr 1fr 1fr;
padding-left:250px;
padding-right: 250px;
font-size: 14px;
align-items: center;`;

const Logo = styled.img`
justify-self: center;
`;
