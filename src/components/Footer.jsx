import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:960px){
        font-size: 12px;
    }
`

function Footer() {
  return (
    <Wrapper>
        Copyright 2024. Web Front-end developer portfolio  by YoonHo   
    </Wrapper>
  )
}

export default Footer