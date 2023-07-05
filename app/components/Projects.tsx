import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'


function Projects() {
    const [selectedId, setSelectedId] = useState('');
    const items = [
        {
            id: '1',
            title: 'Participant Check App',
            img: 'https://hacergizem.github.io/portfolio/img/polling.png',
            description: 'This application was made to check the attendance of the participants who came to the events organised within the Kapsül Technology Platform.',
            techs: 'React, Redux Toolkit, Rest API Integrations, QR System, Admin Panel'
        },
        {
            id: '2',
            title: 'Event App',
            img: 'https://hacergizem.github.io/portfolio/img/application.png',
            description: 'It is a web application where events organised within the Kapsül Technology Platform are listed and registered.',
            techs: 'React, Redux Toolkit, Rest API Integrations, QR System, Admin Panel'
        },
        {
            id: '3',
            title: 'Omni Suite',
            img: 'https://hacergizem.github.io/portfolio/img/omni.png',
            description: 'It is a web application for the Message Management System.',
            techs: 'Bootstrap, Datatable'
        },
        {
            id: '4',
            title: 'İskambil Ajans',
            img: 'https://hacergizem.github.io/portfolio/img/iskambil.png',
            description: 'It is a landing page made for Iskambil Creative Agency.',
            techs: 'Vanilla Javascript'
        },
    ];

    return (
        <div className='mb-10'>
            <p className='text-white text-xl font-semibold mb-6'>Projects</p>
            <motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <motion.div
                            className={`card rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105 ${selectedId === item.id ? 'card-selected' : ''
                                }`}
                            layoutId={`card-container-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            key={item.id}
                            initial={{ scale: 1 }}
                            animate={{ scale: selectedId === item.id ? 1 : 1 }} // Increase scale on selected card
                            transition={{ duration: 0 }}
                        >
                            <div className="max-w-sm rounded-xl bg-slate-900 overflow-hidden">
                                <img src={item.img} className='h-[125px] object-cover w-full' />
                                <motion.h2 className="text-lg font-bold p-3 text-primary">{item.title}</motion.h2>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId('')}

                        >
                            {items.map((item) => (
                                item.id === selectedId && (
                                    <motion.div
                                        className="shadow-lg lg:w-full w-10/12 bg-slate-900 overflow-hidden rounded-lg shadow-md max-w-lg mx-auto"
                                        layoutId={`card-container-${item.id}`}
                                        key={item.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.div className="relative">
                                            <img src={item.img} />
                                            <div className='p-10'>
                                                <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                                                <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                                                <motion.p
                                                    className="text-md text-gray-700"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <span className="text-secondary font-semibold mr-2">
                                                        Techs:
                                                    </span>
                                                    {item.techs}
                                                </motion.p>
                                            </div>

                                        </motion.div>
                                    </motion.div>
                                )
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div></div>

    )
}

export default Projects