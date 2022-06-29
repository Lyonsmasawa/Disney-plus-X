import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommended from './Recommended'
import Trending from './Trending'
import Viewers from './Viewers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../Firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'

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
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend  = []
  let newDisney = []
  let original = []
  let trending = []

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommend.push({id: doc.id, ...doc.data})
            break;

          case 'new':
            newDisney.push({id: doc.id, ...doc.data})
            break;
          
          case 'original':
            original.push({id: doc.id, ...doc.data})
            break;

          case 'trending':
            trending.push({id: doc.id, ...doc.data})
            break;

          default:
            console.log("hey")
        }
      })
    })

    dispatch(setMovies({
      recommended: recommend,
      newDisney: newDisney,
      original: original,
      trending: trending,
    }))
  })
  

  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Recommended />
        <NewDisney />
        <Originals />
        <Trending />
    </Container>
  )
}

export default Home;