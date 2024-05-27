import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  border-bottom: 2px dashed white;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
    padding: 20px;
    font-size: 32px;
    margin-top: 50px;
`

const CardContainer = styled.div`
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:960px){
        width: 80%;
    }
`;

const Card = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  ${(props) =>
    props.$flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  transform-style: preserve-3d;
  border: 1px solid white;
`;

const CardFront = styled(CardFace)`
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover::after {
    content: 'Click';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

const CardBack = styled(CardFace)`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333;
    transform: rotateY(180deg);
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    transform-style: preserve-3d;
`;
const TitleText = styled.h3`
width: 100%;
border-bottom: 1px solid white;
font-size: 30px;
padding: 5px;

@media screen and (max-width:960px){
        font-size: 25px;
    }
`;
const Text = styled.p`
font-size: 18px;
padding: 5px;
margin-top: 30px;
`;
const DemoBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

gap: 8px;
`;
const Demo = styled.a`
padding: 5px;
font-size: 18px;
border: 1px solid white;
color: white;
text-decoration: none;
border-radius: 6px;
margin-top: 30px;
`;

function Project() {
  const [flipped, setFlipped] = useState(Array(6).fill());

  const handleCardClick = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const projects = [
    {
      image: 'https://yoonholeeeee.github.io/portfolio/images/pro1.png',
      name: '메이플스토리홈페이지',
      period: '2024.04.17 - 2024.04.19',
      skills: 'HTML, CSS, JAVASCRIPT, JQUERY',
      description: '메이플스토리 홈페이지 반응형 구현을 통한 기초지식 성장',
      url: 'https://github.com/yoonholeeeee/maple',
      demo: 'https://yoonholeeeee.github.io/maple/'
    },
    {
      image: 'https://yoonholeeeee.github.io/portfolio/images/pro2.png',
      name: '롯데리아',
      period: '2024.04.02 - 2024.04.11',
      skills: 'HTML, CSS, JAVASCRIPT, JQUERY',
      description: '홈페이지 리뉴얼을 통한 디자인 개념 지식 성장',
      url: 'https://github.com/yoonholeeeee/lo',
      demo: 'https://yoonholeeeee.github.io/lo/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84.html'
    },
    {
      image: 'https://yoonholeeeee.github.io/portfolio/images/pro3.png',
      name: '북마크페이지',
      period: '2023.01 - 2023.06',
      skills: 'React, Vite, TypeScript, Scss, Axios, Atom, Recoil',
      description: '리액트 클론코딩을 통한 컴포넌트 개념 ts,scss기본개념 axios를 통한 api활용 방법 recoil사용으로 인한 상태관리의 중요성 파악',
      url: 'https://github.com/yoonholeeeee/clone_react',
      demo: 'https://yoonholeeeee.github.io/clone_react/'
    },
    // {
    //   image: '/images/pro4.png',
    //   name: '프로젝트4',
    //   period: '2024.',
    //   skills: 'React',
    //   description: '프로젝트4은 ...',
    //   url: 'https://github.com/yoonholeeeee/clone_react',
    //   demo: 'https://yoonholeeeee.github.io/clone_react/'
    // },
    // {
    //   image: '/images/pro5.png',
    //   name: '프로젝트5',
    //   period: '2024.',
    //   skills: 'React',
    //   description: '프로젝트5는 ...',
    //   url: 'https://github.com/yoonholeeeee/clone_react',
    //   demo: 'https://yoonholeeeee.github.io/clone_react/'
    // },
    {
      image: 'https://yoonholeeeee.github.io/portfolio/images/pro6.png',
      name: 'Portfolio',
      period: '2024.05.20 - 2024.05.',
      skills: 'React, Styled-Components',
      description: '리액트와 스타일컴포넌트만 활용한 개인 포트폴리오 페이지',
      url: 'https://github.com/yoonholeeeee/portfolio',
      demo: 'https://yoonholeeeee.github.io/portfolio/'
    }
  ];

  return (
    <section id='projects'>
    <Wrapper>
        <Title>Projects</Title>
      <Container>
        {projects.map((project, index) => (
          <CardContainer key={index} onClick={() => handleCardClick(index)}>
            <Card $flipped={flipped[index]}>
              <CardFront style={{ backgroundImage: `url(${project.image})` }} />
              <CardBack>
                <TitleText>{project.name}</TitleText>
                <Text>{project.period}</Text>
                <Text>{project.skills}</Text>
                <Text>{project.description}</Text>
                <DemoBox>
                <Demo href={project.url} target='_blank'>Source</Demo>
                <Demo href={project.demo} target='_blank'>Demo</Demo>
                </DemoBox>
              </CardBack>
            </Card>
          </CardContainer>
        ))}
      </Container>
      {/* Add any additional content below the Inner */}
    </Wrapper>
    </section>
  );
}

export default Project;
