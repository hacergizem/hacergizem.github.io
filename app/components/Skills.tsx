import React from 'react'
import Image from 'next/image'


import Javascript from '../../public/assets/javascript.svg'
import Typescript from '../../public/assets/typescript.svg'
import ReactIcon from '../../public/assets/react.svg'
import Tailwind from '../../public/assets/tailwind-css.svg'
import Sass from '../../public/assets/sass.svg'
import Next from '../../public/assets/nextjs.svg'
import Vue from '../../public/assets/vuejs.svg'
import Git from '../../public/assets/git.svg'

function Skills() {
    return (
        <div className='mb-10'>
            <p className='text-white text-xl font-semibold mb-6'>Tech Stack</p>
            <div className='flex flex-row gap-3'>
                <Javascript width={34} height={34} />
                <Typescript width={34} height={34} />
                <ReactIcon width={34} height={34} />
                <Next width={34} height={34} />
                <Vue width={34} height={34} />
                <Git width={34} height={34} />
                <Tailwind width={34} height={34} />
                <Sass width={34} height={34} />
            </div>

        </div>
    )
}

export default Skills