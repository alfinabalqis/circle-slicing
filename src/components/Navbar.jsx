import React from 'react'
import Logo from '../assets/images/logo.svg'
import { menu } from '../data'
import Arrow from '../assets/images/ic-arrow.svg'

const Navbar = () => {
    return (
        <nav class="bg-transparent absolute lg:ml-8 xl:ml-[110px] z-0 top-0 left-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8">
            <a href="#" class="flex items-center">
                <img src={Logo} class="mr-5" alt="Flowbite Logo" />
            </a>
            <div className='flex xl:gap-64'>
            <div class="flex md:order-2">
                <button type="button" class="py-3 px-6 text-white bg-black rounded-lg border-2 flex items-center gap-2">Lets Building - Its Free <span>
                    <img src={Arrow} alt="" />
                </span>
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {menu.map(items => (
                        <li key={items.id}>
                            <a href={items.url} class="block py-2 pl-3 pr-4 text-gray-custom " aria-current="page">{items.title}</a>
                        </li>
                    ))}

                </ul>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar