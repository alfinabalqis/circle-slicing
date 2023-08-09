import React from 'react'

import { ButtonWatch } from './Button'
import Arrow from '../assets/images/ic-arrow.svg'
import ArrowBlack from '../assets/images/ic-arrow-black.svg'
import IconProfile from '../assets/images/ic-profile.svg'
import Rate from '../assets/images/ic-star.svg'

const Card = (props) => {
  const { className, title, desc, image } = props;
  return (
    <div className={`rounded-lg bg-black-custom xl:w-1/2 lg:w-1/2 ${className}`}>
      <div className='px-10 py-8 text-white'>
        <div className="content mb-5">
          <h1 className='text-4xl lg:text-[26px] font-bold leading-none mb-4 leading-tight text-white'>{title}</h1>
          <p className='mb-8 text-gray-custom'>{desc}</p>
        </div>
        <div className='flex gap-2 items-center'>
          Read More <img src={Arrow} alt="" />
        </div>
      </div>
      <div className='mt-6 pl-10'>
        {image && <img src={image} alt="image" />}
      </div>
    </div>
  )
}

const Join = () => {
  return (
    <div className='px-10 py-6 border-gradient text-white my-10 mx-20'>
      <div className="content mb-5">
        <h1 className='text-4xl lg:text-[26px] font-bold leading-none mb-4 text-white'>Join the community around the world</h1>
        <p className='mb-8 text-white'>More than millions of people around the world have joined our community to develop skills for individuals and collaborate with teams. It's your turn to join us! We are waiting for the presence of all friends</p>
      </div>
      <div className='w-52'>
        <ButtonWatch customContent="Join Community" customImage={ArrowBlack} style={{ flexDirection: 'row-reverse' }} />
      </div>
    </div>
  )
}

const CardTestimoni = () => {
  return (
    <div>
      <div className='p-6 mx-2 bg-black-custom rounded-lg'>
        <div className='flex items-center gap-5'>
          <div>
            <img src={IconProfile} alt="icon" />
          </div>
          <div>
            <h3 className='lg:text-[16px] font-medium leading-tight my-1 text-white'>Leslie Alexander</h3>
            <p className='text-gray-custom'>Community</p>
          </div>
        </div>
        <div className='pb-8 pt-3 text-gray-custom'>
          <p>Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?</p>
        </div>
        <div className='flex items-center gap-2'>
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src={Rate} alt="Rating" />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Card, Join, CardTestimoni }