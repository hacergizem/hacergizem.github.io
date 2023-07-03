import React from 'react'

function Timeline() {
    return (
        <div>
            <p className='text-white text-xl font-semibold'>Experience</p>
            <ol className="relative mt-5 border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 - Present</time>
                    <h2 className="text-xl text-secondary font-semibold text-gray-900">Frontend Developer</h2>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Macellan - Alternatif SuperApp</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Alternative SuperApp is one of the product of Macellan. Alternative SuperApp is a Fintech application and it provides Fintech solutions to companies. </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className='text-primary font-semibold'>Frontend:</span> React.js, Bootstrap, Tailwind <br />
                        <span className='text-primary font-semibold'>Methodologies:</span> Agile, Scrum
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022 - October 2022</time>
                    <h2 className="text-xl text-secondary font-semibold text-gray-900">Frontend Developer</h2>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kapsül Teknoloji Platformu</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I worked on web and mobile projects for the needs of the company. I took part in the management and coding of projects.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className='text-primary font-semibold'>Frontend:</span> TypeScript, React.js, Next.js, Redux, Tailwind, Mantine <br />
                        <span className='text-primary font-semibold'>Methodologies:</span> Agile, Scrum
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022 - October 2022</time>
                    <h2 className="text-xl text-secondary font-semibold text-gray-900">Freelancer</h2>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Since my university years, I have provided freelance frontend support to many customers.</p>
                </li>
            </ol>
        </div>


    )
}

export default Timeline