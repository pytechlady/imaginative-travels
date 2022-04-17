import React from 'react'
import About from '../component/about/About'
import Bg from '../component/bg/Bg'
import Bg2 from '../component/bg2/Bg2'
import TeamInfo from '../component/teams/teamInfo'

const about = () => {
  return (
    <div>
        <Bg title="About Us" paragraph="We are enthusiastic travel consultant that prioritize our client's request..."/>
        <About />
        <TeamInfo />
        <Bg2 />
    </div>
  )
}

export default about