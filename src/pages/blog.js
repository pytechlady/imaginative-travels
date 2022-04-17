import React from 'react'
import Bg from '../component/bg/Bg'
import Blogcard from '../component/blogcard/blogcard'

const blog = () => {
  return (
    <div>
        <Bg title="Blog Post" paragraph="The best and carefully curated travel stories..."/>
        <Blogcard />
    </div>
  )
}

export default blog