import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width:960px){
        flex-direction: column;
    }
`
const Title = styled.h1`
    padding: 20px;
    font-size: 32px;
    margin-top: 50px;
`
const ContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0 30px 0;
    width: 50%;
    
`
const Text = styled.p`
    font-size: 30px;
    font-weight: bold;

    @media screen and (max-width:960px){
        font-size: 20px;
    }
`
const Link = styled.a`
    font-size: 24px;
    margin-bottom: 30px;
    color: white;
    text-decoration: none;

    @media screen and (max-width:960px){
        font-size: 16px;
    }
`
const ContactRight = styled.div`
    width: 50%;
    border: 1px solid white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px;
    @media screen and (max-width:960px){
        width: 100%;
    }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`
const FormLable = styled.label`
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
    width: 100%;
`
const FormInput = styled.input`
    width: 100%;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 30px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 15px;
    padding: 5px;
    margin-bottom: 30px;
`
const Button = styled.button`
    padding: 10px;
    width: 50%;
    border: 1px solid white;
    border-radius: 6px;
    background-color: black;
    color: white;
    font-size: 15px;
    margin: 0 auto;
    
    cursor: pointer;

    &:hover{
        background: #eee;
        color: black;
    }

    @media screen and (max-width:960px){
        width: 100%;
    }
`
function Contact() {
  return (
    <section id='contact'>
    <Wrapper>
        <Title>Contact</Title>
        <Container>
            <ContactLeft>
                <Text>연락처</Text>
                <Link>010-5660-9843</Link>
                <Text>E-mail</Text>
                <Link href="mailto:jjzs115@gmail.com">jjzs115@gamil.com</Link>
                <Text>깃허브</Text>
                <Link href='https://github.com/yoonholeeeee' target='_blank'>https://github.com/yoonholeeeee</Link>
            </ContactLeft>
            <ContactRight>
                <Form>
                <FormLable htmlFor="name">Name</FormLable>
                <FormInput name='name' placeholder='성함을 입력해주세요.'></FormInput>
                <FormLable htmlFor="email">Mail</FormLable>
                <FormInput name='email' placeholder='메일 주소를 입력해주세요.'></FormInput>
                <FormLable htmlFor="message">Message</FormLable>
                <Textarea name='message' placeholder='내용을 입력해주세요.'></Textarea>
                <Button type="submit">메일 보내기</Button>
                </Form>
            </ContactRight>
        </Container>
    </Wrapper>
    </section>
  )
}

export default Contact