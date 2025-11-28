import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Story  from './pages/Story'
import Character from './pages/Character'
import VTuber from './pages/VTuber'
import LIKE from './pages/like'
import Dislike from './pages/dislike'
import Content from './pages/Content'
import Hashtag from './pages/Hashtag'
import ThankYou from './pages/ThankYou'

function index() {
  return (
    <>
      <Home />
      <About />
      <Story />
      <Character />
      <VTuber />
      <LIKE />
      <Dislike />
      <Content />
      <Hashtag />
      <ThankYou />
    </>
  )
}

export default index