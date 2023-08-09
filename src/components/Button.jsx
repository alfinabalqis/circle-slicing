import React from 'react'
import icPlay from '../assets/images/ic-play.svg'

const ButtonWatch = (props) => {
  const cardStyle = props.style ? props.style : {};
  const isCustomContent = props.customContent !== undefined;
  const isCustomImage = props.customImage !== undefined;

  const { customImage, customContent } = props

  return (
    <a href="#">
      <div className='py-3 px-6 rounded-lg text-black bg-gradient-to-r from-green to-green-second flex items-center gap-1 justify-center' style={cardStyle}>
        {isCustomImage ? <img src={customImage} alt="icon" /> : <img src={icPlay} alt="icon" />}
        {isCustomContent ? <p>{customContent}</p> : <p>Watch a Video</p>}
      </div>
    </a>
  )
}

const ButtonShine = () => {
  return (
    <a href="#">
      <div className='py-3 px-6 text-white border-gradient'>
        Get a Demo
      </div>
    </a>
  )
}

export { ButtonWatch, ButtonShine }