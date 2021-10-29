import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const history = useHistory();
  const [query, setQuery] = useState(history.location.pathname.substring(8));
  const [resultsDisplayed, setResultsDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function getData() {
    const apiRoute = `https://www.reddit.com/r/${query}/top.json?t=year&limit=500`;

    fetch(apiRoute)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setIsLoading(false);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search/${query}`);
    setResultsDisplayed(true);
    setIsLoading(true);
    getData();
  }

  function handleChange(e) {
    setQuery(() => e.target.value);
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Find the best time for a subreddit</Title>
        <SubredditForm onSubmit={handleSubmit}>
          <RSlash>r /</RSlash>
          <InputField type="text" value={query} onChange={handleChange} />
          <SearchButton type="submit">Search</SearchButton>
        </SubredditForm>
      </ContentWrapper>
      {resultsDisplayed && (<ResultsWrapper>{isLoading ? <Spinner src="/spinner.svg" alt="spinner.svg" /> : <Results />}</ResultsWrapper>)}
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
line-height: 46px;
`;

const SubredditForm = styled.form`
display: flex;
justify-content: center;
align-items: center;`;

const RSlash = styled.p`
font-size: 18px;
line-height: 9px;
color: #9E9E9E;`;

const InputField = styled.input`
border: 1px solid #E6E6E6;
border-radius: 2px;
height: 36px;
font-size: 14px;
width: 370px;
margin-right: 12px;
margin-left: 12px;`;

const SearchButton = styled.button`
background: #FDB755;
border: none;
border-radius: 4px;
font-weight: 500;
font-size: 14px;
line-height: 9px;
color: white;
width: 92px;
height: 36px;
text-transform: uppercase;

:hover {
  cursor: pointer;
}`;

const ResultsWrapper = styled.div`
margin-top: 56px;`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img`
display: block;
animation: ${rotate} 1.5s linear infinite;`;

const Results = styled.div``;
