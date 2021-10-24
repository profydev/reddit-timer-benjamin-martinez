import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>No reactions to your reddit posts?</Title>
        <Subtitle>
          Great timing, great results! Find the best time to post on your subreddit!
        </Subtitle>
        <ToSearchResults>Show me the best time</ToSearchResults>
        <RedditTag>r/javascript</RedditTag>
      </ContentWrapper>
      <HeatMapImage src="table.png" alt="table.png" />
      <h3 id="how-it-works">How it works</h3>
      <h3 id="about">About</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
display: grid;
justify-items: center;`;

const ContentWrapper = styled.div`
text-align: center;`;

const Title = styled.h1`
font-size: 38px;
`;

const Subtitle = styled.p`
color: #93918F;
line-height: 2px;
`;

const ToSearchResults = styled.a`
display: inline-block;
text-transform: uppercase;
font-size: 14px;
line-height: 9px;
border-radius: 4px;
margin: 45px 0px;
padding: 13.5px 15px;
color: white;
background: #FDB755;
`;

const RedditTag = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #93918F;
`;

const HeatMapImage = styled.img``;
