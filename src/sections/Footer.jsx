import React from 'react'

import { footerMenu } from '../data'
import ImageMoon3 from '../assets/images/moon-3.png'

const Footer = () => {
    return (
        <div className='flex flex-col gap-10 pt-12 lg:mr-8 xl:mr-[110px] items-end lg:mt-[-11rem] xl:mt-[-11rem] xl:flex-row lg:flex-row'>
            <div className='hidden xl:block lg:block'>
                <img src={ImageMoon3} alt="" />
            </div>
            <div className='xl:ml-[-10rem] xl:mb-16'>
                <div className='menu flex gap-5 flex-wrap lg:gap-20 xl:gap-20'>
                    {footerMenu.map(items => (
                        <div key={items.id}>
                            <ul className='text-white text-base font-semibold mb-5'>{items.title}</ul>
                            {items.listlistItems.map ((listItems) => (
                                <li className='text-gray-custom list-none gap-y-5 h-8 text-sm' key={listItems.id
                                }>{listItems.title}</li>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='text-center lg:text-right xl:text-right'>
                    <p className='text-gray-custom pt-10'>2022 All Rights Reserved © Circle</p>
                </div>
            </div>
        </div>
    )
}

export default Footer