import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faUser, faCakeCandles, faSchool, } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    
`
const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 2px dashed white;
    @media screen and (max-width:960px){
        width: 100%;
    }
    
`
const Title = styled.h1`
    color: white;
    font-style: italic;
    padding: 30px;
    margin-top: 50px;
    @media screen and (max-width:960px){
        font-size: 16px;
    }
`

const TitleText = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    line-height: 2;

    @media screen and (max-width:960px){
        width: 100%;
        font-size: 16px;
        
    }
`
const H2 = styled.h2`
    font-size: 32px;

    @media screen and (max-width:960px){
        font-size: 24px;
        
    }
`

const Aboutme = styled.div`
    width: 700px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:  20px 30px;
    background-color: #333;
    border-radius: 16px;
    margin: 20px 0px 70px 0px;
    @media screen and (max-width:960px){
        width: 100%;
    }
`
const AboutmeInner = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 40px;
    

`
const ImgBox = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width:960px){
        display: none;
    }

`
const Img = styled.img`
    width: 100%;
    border-radius: 25px;
`
const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`
const RightText = styled.span`
    font-size: 18px;
    
`
const RightTextSkillsUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 8px;
`
const RightTextSkills = styled.li`
    font-size: 18px;
    border: 1px solid white;
    padding: 5px;
    border-radius: 6px;
`

function About() {
  return (
    <section id='about'>
    <Wrapper>
        <Container>
            <Title>안녕하세요 주니어 프론트엔드 개발자 이윤호입니다.</Title>
            <H2>&lt; 프론트엔드 개발자로서의 첫걸음 /&gt;</H2>
            <TitleText>
                저는 웹 페이지의 동적 모션을 좋아하고, 다양한 인터랙션 + 새로운 기술에 관심이 많습니다.<br />
                처음 코딩을 배우며 느꼈던 재미와 신입의 열정적 자세로 즐겁게 일하겠습니다!<br />
                신입이지만 사회 경험들을 바탕으로 직원들과 원활하게 소통하며 협업해 나가겠습니다!<br />
                지속적인 성장을 통해 견고한 UI를 개발하는 프론트 엔드개발자가 되는 것이 목표입니다.<br />
            </TitleText>
            <Aboutme>
                <h2 style={{color : "white"}}>About</h2>
                <AboutmeInner>
                    <ImgBox>
                        <Img src="https://yoonholeeeee.github.io/portfolio/images/about.jpg" alt="" />
                    </ImgBox>
                    <TextBox>
                    <RightText><FontAwesomeIcon icon={faUser} /> &nbsp;&nbsp;이윤호 </RightText>
                <RightText><FontAwesomeIcon icon={faCakeCandles} />&nbsp;&nbsp; 1995.02.26</RightText>
                <RightText> <FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;경기도 안산시</RightText>
                <RightText><FontAwesomeIcon icon={faSchool} />&nbsp;&nbsp; 안산대학교 졸업</RightText>
                <RightTextSkillsUl>
                <RightTextSkills>Html</RightTextSkills>
                <RightTextSkills>Css</RightTextSkills>
                <RightTextSkills>JavaScript</RightTextSkills>
                <RightTextSkills>React</RightTextSkills>
                <RightTextSkills>TypeScript</RightTextSkills>
                </RightTextSkillsUl>
                    </TextBox>
                </AboutmeInner>
            </Aboutme>
        </Container>
    </Wrapper>
    </section>
  )
}

export default About