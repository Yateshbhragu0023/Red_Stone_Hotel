import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Header() {


    const [menu, setMenu] = useState(false)

    const menubar = [
        {
            id: 1,
            name: 'Home ',
            to: ""
        },
        {
            id: 2,
            name: 'About ',
            to: "/about"
        },
        {
            id: 3,
            name: 'Gallery',
            to: "/gallery"
        },
        {
            id: 4,
            name: 'Rooms',
            to: "/rooms"
        },
        {
            id: 5,
            name: 'Services',
            to: "/service"
        },
        {
            id: 6,
            name: 'Contact',
            to: "/contact"
        }

    ]

    return (
        <div className=' bg-white py-3 shadow-lg sticky top-0 z-[999]'>
            <div className=' relative md:w-[85%] sm:w-[90%] w-[95%] mx-auto flex justify-between items-center'>
                <div>
                    <span className='text-[#AB854F] text-2xl font-serif'>THE RED </span><br />
                    <span>STONE HOTEL</span>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex justify-between gap-6 text-[17px]'>
                        {
                            menubar.map(
                                (data, i) => {
                                    return (
                                        <Link to={data.to} key={data.id}>
                                            <li className='hover:text-[#AB854F]'>{data.name}</li>
                                        </Link>
                                    )
                                }
                            )
                        }

                    </ul>
                </div>

                <div>
                    <Link to={'/contact'}>
                        <button className='border px-4 py-2 bg-[#AB854F] hover:bg-[#82581b] text-white font-semibold transition-all duration-150' >Book Now</button>
                    </Link>
                </div>

                <div className='text-[#AB854F] md:hidden block'>
                    {
                        menu == false
                            ?
                            <HiBars3 size={28} onClick={() => setMenu(!menu)} />
                            :
                            <RxCross1 size={20} onClick={() => setMenu(!menu)} />
                    }
                </div>

            </div>
            {/* side menu */}
            <div className={`absolute top-[64px] right-0 ${menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}  w-[200px] h-screen  p-6 pt-10 bg-white transition-all duration-150`}>
                <ul className='space-y-2'>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                </ul>

            </div>
        </div>
    )
}
