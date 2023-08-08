import React from 'react'
import { ButtonWatch } from './Button'

const Card = () => {
  return (
    <div>Card</div>
  )
}

const Join = () => {
  return (
    <div className='px-10 py-6 border-gradient text-white my-10 mx-20'>
      <div className="content mb-5">
        <h1 className='text-4xl lg:text-[26px] font-bold leading-none mb-4 text-white'>Join the community around the world</h1>
        <p className='mb-8 text-white'>More than millions of people around the world have joined our community to develop skills for individuals and collaborate with teams. It's your turn to join us! We are waiting for the presence of all friends</p>
      </div>
      <div className='w-48'>
      <ButtonWatch />
      </div>
    </div>
  )
}

export { Card, Join }