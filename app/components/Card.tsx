import React from 'react'
import pp from '../../public/pp.jpg'
import Image from 'next/image'
import { FiMapPin, FiMail, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

function Card() {
    return (
        <div className='w-4/12 p-10 my-10 rounded-3xl border-solid border-2 border-neutral-700'>
            <Image className='rounded-xl w-full h-88 object-cover' src={pp} alt="Profile Picture" />
            <div className='flex flex-col items-center mt-3'>
                <p className='flex text-white text-center mt-2'><FiMail className='mr-2' size={24} color='#5D00FF' />gizemgk654@gmail.com</p>
                <p className='flex text-white mt-2'><FiMapPin className='mr-2' size={24} color='#5D00FF' />Istanbul, Turkey</p>
            </div>
            <div className='flex flex-row gap-2 justify-center items-center mt-8'>
                <a className="text-white cursor-pointer border-solid border-2 border-primary focus:outline-none rounded-full text-sm p-1.5 text-center">
                    <FiLinkedin size={20} color='#5D00FF' />
                </a>
                <a className="text-white cursor-pointer border-solid border-2 border-primary focus:outline-none rounded-full text-sm p-1.5 text-center">
                    <FiGithub size={20} color='#5D00FF' />
                </a>
                <a className="text-white cursor-pointer border-solid border-2 border-primary focus:outline-none rounded-full text-sm p-1.5 text-center">
                    <FiTwitter size={20} color='#5D00FF' />
                </a>
            </div>
        </div>
    )
}

export default Card