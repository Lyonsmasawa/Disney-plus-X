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
    background-image: url("/images/login-background.jpg");
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

const Login = () => {
    return(
        <Container>
            <Content>
                <CallToAction>
                    <Logo src="/images/cta-logo-one.svg"/>
                </CallToAction>
                <BgImage/>
            </Content>
        </Container>
    )
}

export default Login