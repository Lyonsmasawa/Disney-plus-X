import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    overflow:hidden;
    flex-direction: column;
    height: 100vh;
    text-align: center;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px, 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-image: url("https://cnbl-cdn.bamgrid.com/assets/69cacf722b10df9682a3a747d00b50dd71b76ae3990fd7ed01b063e695b6b0b7/original");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2vw;
    max-width: 650px;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const Logo = styled.img`
    max-width: 600px;
    min-height: 100px;
    display:block;
    width: 100%;
    margin-bottom: 12px;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`

const ImageOne = styled.img`
  
`

const Login = () => {
    return(
        <Container>
            <Content>
                <CallToAction>
                    <Logo src="/images/cta-logo-one.svg"/>
                    <SignUp>GET THE DISNEY BUNDLE</SignUp>
                    <imageOne src="https://cnbl-cdn.bamgrid.com/assets/8349a1f652e69bf1c3685a888092435110056a55e27b4eac3289e10fcb232978/original"></imageOne>
                </CallToAction>
                <BgImage/>
            </Content>
        </Container>
    )
}

export default Login