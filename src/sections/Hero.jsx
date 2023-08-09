import React from 'react'
import { Animated } from "react-animated-css";
import TrackVisibility from 'react-on-screen';
import HeroImage from '../assets/images/hero.svg'
import { ButtonWatch, ButtonShine } from '../components/Button'

const Hero = () => {
  return (
    <section className='h-full max-h-[640px] mb-5 lg:mb-0 xl:mb-0 z-20'>
      <div className='flex flex-col lg:flex-row items-start'>
        <div className='lg:ml-8 xl:ml-[110px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 mt-40'>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-tight mb-6 text-white'>
              <span className='text-gradient'>Develop</span> - your <br /> app and web easily <br /> with circle.
            </h1>
          </Animated>

          <p className='max-w-[480px] mb-8 text-gray-custom'>
            Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.
          </p>
          <div className="flex gap-5">
            <ButtonShine /><ButtonWatch />
          </div>
        </div>

        <div className='hidden xl:block lg:block max-w-3xl'>
          <img src={HeroImage} alt='Hero Image' />
        </div>
      </div>
    </section>
  )
}

export default Hero