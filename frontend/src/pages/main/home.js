import React from 'react'
import LeftWrapper from './leftWrapper'
import RightWrapper from './rightWrapper'

function Home() {
  return (
    <div style={{display: 'flex'}}>
      <LeftWrapper />
      <RightWrapper />
    </div>
  )
}

export default Home