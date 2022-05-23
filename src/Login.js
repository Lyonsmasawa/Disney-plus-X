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
    `

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    
`

export default Login