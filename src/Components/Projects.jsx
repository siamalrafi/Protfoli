import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub } from 'react-icons/fa';



const Projects = () => {
    // const Projects = [1, 2, 3, 4];
    const projects = [
        {
            id: 1,
            name: "Mirraw E-commerce",
            description: "This is a simple e-commerce website . There are several types of second hand products available. You can sell and buy any products if you want to purchase. There are many different Seller who are want to sell there products in this website",
            Technology: ' React,Tailwind,Daisy Ui,Mongodb,Firebase.',
            img: 'https://source.unsplash.com/random/300x300/?2',
            githubUrl: 'https://github.com/siamalrafi/Mirraw-client-website',
            LiveUrl: 'https://mirraw-ebac6.web.app/'
        },
        {
            id: 2,
            name: "Skillshare Academy",
            description: "This project was bootstrapped with Create React App. This is the top class online education platform in the world. In this platform you can learn something new . Many online course are available in here",
            Technology: 'React,Tailwind,Mongodb,Firebase, Private Route,Pdf package',
            img: 'https://source.unsplash.com/random/300x300/?2',
            githubUrl: 'https://github.com/siamalrafi/Skillshare-Academy-projects',
            LiveUrl: 'https://skillshare-academy.web.app/'
        },
        {
            id: 3,
            name: "Dochouse",
            description: 'The DOCHOUSE is a medical service provider that provider various service in reasonable price.This service provider has some extra facilities to handle the customers and get teh best service. The Family Package are very popular in this situation',
            Technology: 'React,Tailwind,Mongodb,Firebase, Private Route',
            img: 'https://source.unsplash.com/random/300x300/?2',
            githubUrl: 'https://github.com/siamalrafi/DOCHOUSE',
            LiveUrl: 'hhttps://dochouse-88db5.web.app/'
        },

    ]




    return (
        <div id='projects'>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-16'>My Recent
                    <span className='ml-3 text-primary'>works</span>
                </h1>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:mx-24'>
                {
                    projects.map((project, i) =>
                        <div key={i} className="max-w-xs mt-5 rounded-md shadow hover:shadow-2xl">
                            <img src="https://source.unsplash.com/random/300x300/?2" alt=""
                                className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />

                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-black font-semibold tracking-wide">{project.name}</h2>
                                    <p className="text-black">
                                        {project.description}
                                    </p>
                                    <p className='font-bold'>Technology : {project.Technology}</p>
                                </div>



                                <div className='my-8 text-center'>
                                    <a href={project.githubUrl} target="_blank" >
                                        <button className="btn btn-sm btn-outline text-black hover:bg-primary ">
                                            <FaGithub />
                                            <span className='ml-2'>
                                                GitHub</span>
                                        </button>
                                    </a>
                                    <a href={project.LiveUrl} target="_blank" >
                                        <button className="btn btn-sm text-center rounded hover mx-4">
                                            <FontAwesomeIcon icon={faEye} />
                                            <span className='ml-2'>Live Link</span></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>




        </div >
    );
};

export default Projects;