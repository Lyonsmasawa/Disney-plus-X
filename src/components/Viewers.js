import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
    const Container = styled.div`
        margin-top: 30px;
        padding: 30px 0px 26px;
        display: grid;
        grid-gap: 25px;
        gap: 25px;
        grid-template-columns: repeat(5, minmax(0, 1fr));


        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    `

  return (
    <Container>
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
        <div className="">5</div>
    </Container>
  )
}

export default Viewers