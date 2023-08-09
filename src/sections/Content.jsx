import React from 'react'
import ImageDevelop from '../assets/images/img-develop.svg'
import ImageCircle from '../assets/images/img-circle.svg'
import ImageMoon2 from '../assets/images/moon-2.svg'
import IconSoftware from '../assets/images/ic-software.svg'
import IconSoftware2 from '../assets/images/ic-software-2.svg'
import IconDownload from '../assets/images/ic-download.svg'
import ImageIssue from '../assets/images/img-issue.svg'
import ImageIssue2 from '../assets/images/img-issue2.svg'

import { Card } from '../components/Card'
import { ButtonShine, ButtonWatch } from '../components/Button'
import Merk from '../components/Merk'
import Testimoni from '../components/Testimoni'

const Develop = () => {
  return (
    <>
      <Merk />

      <section className='lg:ml-8 xl:ml-[110px] lg:mr-8 xl:mr-[110px] pt-20'>
        <div className='develop'>
          <div className="flex items-start justify-between gap-5 pb-10 flex-col lg:flex-row xl:flex-row">
            <h1 className='max-w-[600px] text-4xl lg:text-[48px] font-bold leading-none mb-4 text-white'>Finally you can develop full-stack web applications in one place.</h1>
            <p className='max-w-[460px] mb-8 text-gray-custom'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
          </div>
          <div>
            <img src={ImageDevelop} alt="" />
          </div>
          <div className='flex gap-10 py-8 flex-col lg:flex-row xl:flex-row'>
            <Card
              title="Optimized Frameworks"
              desc="A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
              className="border-gradient" />
            <Card title="Integrated with GitHub" desc="Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository." />
          </div>
          <div className="text-center text-white text-lg my-5">
            <p>Explore More Services</p>
          </div>
        </div>

        <div className='circle pb-8 pt-12'>
          <h1 className='max-w-[880px] text-4xl lg:text-[48px] font-bold leading-tight mb-4 text-white'>Circle provides teams and individuals with customizable <span className='text-gradient'>management tools</span> for your source code.</h1>
          <div className='flex py-2 gap-5 justify-between flex-col lg:flex-row xl:flex-row'>
            <div>
              <p className='max-w-[500px] mb-8 text-gray-custom leading-7'>Create issues, sections into tasks, track relationships, add custom spaces, and initiate discussions. Visualize large projects with spreadsheets or codeboards, and use the help of code systems to automate everything.</p>
              <div className='flex gap-5'>
                <ButtonShine /><ButtonWatch />
              </div>
            </div>
            <div className='code-develop lg:mt-[-56px] xl:mt-[-56px]'>
              <img src={ImageCircle} alt="" />
            </div>
          </div>
        </div>

        <div className='software text-center py-10'>
          <h1 className='text-4xl lg:text-[68px] font-semibold leading-tight mb-6 text-white'>
            Useful <span className='text-gradient'>software</span> <br /> that can assist.
          </h1>
          <div className='flex flex-col justify-center gap-y-16 py-10'>
            <img src={IconSoftware} alt="" className='h-10' />
            <img src={IconSoftware2} alt="" className='h-10' />
          </div>
          <div className='mx-20 xl:mx-96 lg:mx-96'>
            <ButtonWatch customContent="Download Software" customImage={IconDownload} />
          </div>
        </div>

      </section>

      <div className='hidden xl:flex xl:justify-end'>
        <img src={ImageMoon2} alt="moon" />
      </div>

      <div className='lg:ml-8 xl:ml-[110px] lg:mr-8 xl:mr-[110px] py-8'>
        <div className='text-center pb-10'>
          <h1 className='text-4xl lg:text-[48px] font-semibold leading-tight mb-4 text-white'>
            Concentrate on larger issues.
          </h1>
          <p className='mt-2 text-gray-custom'>Spend less time on repetitive code patterns and more time on <br /> what really matters building great software.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row xl:flex-row gap-6'>
          <Card
            title="Get customized AI-based recommendations."
            desc="Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
            image={ImageIssue} />

          <Card
            title="Help of plugins and source code templates."
            desc="Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
            image={ImageIssue2} />
        </div>

      </div>

      <div className='testimonial py-8'>
        <div className='text-center'>
          <h1 className='text-4xl lg:text-[48px] font-semibold leading-tight py-6 text-white'>
            What people are saying about <span className='text-gradient'>Circle</span></h1>
        </div>
        <Testimoni/>
      </div>
    </>
  )
}

export default Develop