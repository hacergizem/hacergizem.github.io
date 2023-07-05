import React from 'react'

const experiences = [
    {
        title: "Frontend Developer",
        date: 'October 2022 - Present',
        company: "Macellan - Alternatif SuperApp",
        desc: "Alternative SuperApp is one of the product of Macellan. Alternative SuperApp is a Fintech application and it provides Fintech solutions to companies. ",
        tech: [
            {
                frontend: "TypeScript, React.js, Next.js, Redux, Tailwind, Mantine ",
                methodologies: "Agile, Scrum",
            },
        ],
    },
    {
        title: "Frontend Developer",
        date: 'July 2022 - October 2022',
        company: "Kapsül Teknoloji Platformu",
        desc: "I worked on web and mobile projects for the needs of the company. I took part in the management and coding of projects. ",
        tech:
            [{
                frontend: "React.js, React Native, Bootstrap, Tailwind",
                methodologies: "Agile, Scrum",
            }],

    },
    {
        title: "Freelancer",
        date: 'January 2022 - Present',
        company: "",
        desc: "Since my university years, I have provided freelance frontend support to many customers.",
        tech: [],
    },
];

function Timeline() {

    return (
        <div>
            <p className='text-white text-xl font-semibold'>Experience</p>
            <ol className="relative  mt-5 border-l border-gray-200 dark:border-gray-700">
                {experiences.map((experience, index) => {
                    return (
                        <li className="mb-10 ml-4" key={index}>
                            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5"></div>
                            <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {experience.date}
                            </p>
                            <h2
                                className="text-xl text-secondary font-semibold text-gray-900">
                                {experience.title}
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {experience?.company}
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                {experience.desc}
                            </p>

                            {experience.tech.length ? (
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    <span className="text-primary font-semibold mr-1">
                                        Frontend:
                                    </span>
                                    {experience?.tech[0]?.frontend}
                                    <br />
                                    <span className="text-primary font-semibold mr-1">
                                        Methodologies:
                                    </span>
                                    {experience?.tech[0]?.methodologies}
                                </p>
                            ) : null}
                        </li>
                    );
                })}
            </ol>
        </div>


    )
}

export default Timeline