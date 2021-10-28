import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const history = useHistory();
  const [query, setQuery] = useState(history.location.pathname.substring(8));

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search/${query}`);
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
