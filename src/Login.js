import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return(
        <Container>
            <Content>Center</Content>
        </Container>
    )
}
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

export default Login