import { motion } from 'framer-motion'
import React from 'react'

function Description() {
    return (
        <div>
            <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className='text-3xl lg:text-7xl font-semibold text-white'>Hacer Gizem Gök</motion.p>
            <p className='mt-4 mb-10 text-base font-normal text-gray-300'>I graduated from the Computer Engineering department. I have been interested in Frontend Development for almost two year. Every day, I dedicate myself to learning new technologies and continuously improving my skills.</p>
        </div>
    )
}

export default Description