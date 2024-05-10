import React from 'react'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar></LeftSideBar>
        <Feed></Feed>
        <RightSideBar></RightSideBar>
    </div>
  )
}

export default Home
