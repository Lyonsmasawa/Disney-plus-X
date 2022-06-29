import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;  
    display: block;
    top: 72px;
    padding: 0 calc(1vw + 2px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        inset: 0;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        position: absolute;
        z-index: -1;
        opacity: 1;
    }
`

export const Home = (props) => {

  return (
    <Container>
        <ImageSlider />
        <Viewers />
    </Container>
  )
}

export default Home;