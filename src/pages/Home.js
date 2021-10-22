import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <h1>Home</h1>
      <h3 id="how-it-works">How it works</h3>
      <h3 id="about">About</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
