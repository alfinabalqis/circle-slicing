import React from 'react'
import ImageCode from '../assets/images/img-hero.svg'
import { merk } from '../data'
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
                    {merk.map(merk => (
                        <div key={merk.id}>
                            <img src={merk.url} className='mx-auto' />
                        </div>
                    ))}
                </div>
            </div>

            <Join/>
        </section>
    )
}

export default Merk