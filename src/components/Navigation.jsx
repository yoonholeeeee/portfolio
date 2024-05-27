import React from "react";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 50px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: black;
    z-index: 999;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 100%;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    width: 50%;
    height: 100%;

    @media screen and (max-width:960px){
        display: none;
    }
`;
const Img = styled.img`

    margin-left: 10px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 50%;
    margin-right: 10px;

    @media screen and (max-width:960px){
        justify-content: center;
        width: 100%;
    }
`;

const Links = styled.a`
    text-decoration: none;
    font-size: 20px;
    padding: 0px 10px;
    color: white;
    @media screen and (max-width:960px){
        font-size: 18px;
    }
`;

function Navigation () {
    return (
        <Header>
            <Wrapper>
                    <Logo>
                        <Img src="https://yoonholeeeee.github.io/portfolio/images/logo2.png" alt="yoonho" />
                    </Logo>
                    <Nav>
                        <Links href="#home">[ Home ,</Links>
                        <Links href="#about">About ,</Links>
                        <Links href="#projects">Projects ,</Links>
                        <Links href="#contact">Contact  ]</Links>
                    </Nav>
            </Wrapper>
        </Header>
    )
}

export default Navigation;