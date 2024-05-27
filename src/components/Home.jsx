import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrontEndDev = styled.div`
  font-size: 100px;
  color: white;
  @media screen and (max-width:960px){
        font-size: 50px;
    }
`;

const Home = () => {
  const [text, setText] = useState('');
  const phrase = "Front-End Dev.";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setText(phrase.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='home'>
    <Wrapper>
      <FrontEndDev>{text}</FrontEndDev>
    </Wrapper>
    </section>
  );
};

export default Home;