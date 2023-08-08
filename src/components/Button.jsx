import React from 'react'

import icPlay from '../assets/images/ic-play.svg'

const ButtonWatch = () => {
  return (
    <a href="#">
      <div className='py-3 px-6 rounded-lg text-black bg-gradient-to-r from-green to-green-second flex items-center gap-0.5'>
      <img src={icPlay} alt="" />
      Watch a Video
    </div>
    </a>
  )
}

const ButtonShine = () => {
  return(
    <a href="#">
    <div className='py-3 px-6 text-white border-gradient'>
    Get a Demo
    </div>
  </a>
  )
}

export {ButtonWatch, ButtonShine}