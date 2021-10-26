import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>No reactions to your reddit posts?</Title>
        <Subtitle>
          Great timing, great results! Find the best time to post on your subreddit!
        </Subtitle>
        <Link to="/search/javascript">
          <ToSearchResults>Show me the best time</ToSearchResults>
        </Link>
        <RedditTag>r/javascript</RedditTag>
      </ContentWrapper>
      <HeatMapImage src="table.png" alt="table.png" />
      <InfoWrapper>
        <HowItWorksWrapper>
          <InfoSubtitle id="how-it-works">How it works</InfoSubtitle>
          <HowItWorksList>
            <li>We find the top 500 posts from the past year for a subreddit.</li>
            <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
            <li>See immediately when to submit your reddit post.</li>
          </HowItWorksList>
        </HowItWorksWrapper>
        <AboutWrapper>
          <InfoSubtitle id="about">About</InfoSubtitle>
          <AboutText>
            This app was created during a course on
            <AboutLink href="https://profy.dev"> profy.dev </AboutLink>
            with the goal to implement a pixel-perfect real-world application with professional
            workflows and tools like Kanban, ClickUp, Figma, Github, pull requests and code reviews.
            <AboutLink href="https://profy.dev/employers"> Click here for more information.</AboutLink>
          </AboutText>
        </AboutWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
display: grid;
justify-items: center;`;

const ContentWrapper = styled.div`
text-align: center;`;

const InfoWrapper = styled.div`
display: grid;
justify-items: center;
gap: 95px;`;

const Title = styled.h1`
font-size: 38px;
`;

const Subtitle = styled.p`
color: #93918F;
line-height: 2px;
`;

const ToSearchResults = styled.p`
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

const HowItWorksWrapper = styled.div`
width: 738px;
margin-top: 120px;`;

const AboutWrapper = styled.div`
width: 738px;
margin-bottom: 100px;`;

const InfoSubtitle = styled.h1`
font-size: 24px;
line-height: 29px;
font-weight: 600`;

const AboutText = styled.p`
font-size: 16px;
line-height: 27px;
color: #93918F;`;

const AboutLink = styled.a`
color: #0087ff !important;
:hover {
  cursor: pointer;
}`;

const HowItWorksList = styled.ul`
font-size: 16px;
line-height: 27px;
color: #93918F;
margin: 0;`;

// const HowItWorksListItem = styled.li``;
