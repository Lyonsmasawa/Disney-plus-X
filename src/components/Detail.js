import React from 'react'
import styled from 'styled-components'

const Detail = () => {

    const Container = styled.div`
        position: relative;
        min-height: calc(100vh-250px);
        overflow-x: hidden;
        display: block;
        top: 72px;
        padding: 0 calc(3.5vw + 5px);
    `

    const Background = styled.div`
        left: 0px;
        opacity: 0.8;
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: -1;

        img {
            width: 100vw;
            height: 100vh;
            
            @media (max-width: 768px) {
            width: initial;
            }
        }
    `

    const ImageTitle = styled.div`
        align-items: flex-end;
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        margin: 0px auto;
        height: 30vw;
        width: 100%;
        padding-bottom: 24px;
        min-height: 170px;

        img {
            max-width: 600px;
            min-width: 200px;
            width: 35vw;
        }
    `

    const ContentMeta = styled.div`
        max-width: 874px;
    `

    const Controls = styled.div`
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        margin: 24px 0px;
        min-height: 56px;
    `

    const Player = styled.button`
        font-size: 15px;
        margin: 0px 22px 0px 0px;
        padding: 0px 24px;
        height: 54px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;

        img {
            width: 32px;
        }

        &:hover {
            background: rgb(198, 198, 198);
        }
    `

  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg" 
                alt="" 
            />
        </Background>
        
        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78"
                alt="" 
            />
        </ImageTitle>
        <ContentMeta>
            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </Player>
            </Controls>
        </ContentMeta>

    </Container>
  )
}

export default Detail