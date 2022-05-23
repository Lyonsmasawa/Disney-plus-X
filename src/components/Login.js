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
    justify-content: center;
    align-items: center;
    flex-direction: column;
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


const Login = () => {
    return(
        <Container>
            <CallToAction>
                <Logo src="/images/cta-logo-one.png"/>
            </CallToAction>
            <Content><BgImage/></Content>
        </Container>
    )
}

export default Login