import React from 'react'
import ImageCode from '../assets/images/img-hero.svg'
import ImageMerk from '../assets/images/img-merk.svg'
import ImageMerk1 from '../assets/images/img-merk-1.svg'
import ImageMerk2 from '../assets/images/img-merk-2.svg'
import ImageMerk3 from '../assets/images/img-merk-3.svg'
import ImageMerk4 from '../assets/images/img-merk-4.svg'
import ImageMerk5 from '../assets/images/img-merk-5.svg'
import { Join } from './Card'

const Merk = () => {
    return (
        <section className='lg:ml-8 xl:ml-[110px] lg:mr-8 xl:mr-[110px]'>
            <div className='pb-12'>
                <img src={ImageCode} alt="" />
            </div>

            <div className="text-center text-white text-lg my-5">
                <p>Providing power to the world's best product teams. <br /> From next-generation startups to established businesses</p>
            </div>

            <div className='py-8'>
                <div className="flex flex-col lg:flex-row xl:flex-row justify-between gap-8 m-0">
                    <img src={ImageMerk} className='mx-auto' />
                    <img src={ImageMerk1} className='mx-auto' />
                    <img src={ImageMerk2} className='mx-auto' />
                    <img src={ImageMerk3} className='mx-auto' />
                    <img src={ImageMerk4} className='mx-auto' />
                    <img src={ImageMerk5} className='mx-auto' />
                </div>
            </div>

            <Join />
        </section>
    )
}

export default Merk