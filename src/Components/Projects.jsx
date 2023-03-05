import React, { useState } from 'react';
import SingleProject from './SingleProject';
import project1 from '../assets/Project/project1.png';
import project2 from '../assets/Project/project2.png';
import project4 from '../assets/Project/project4.png';
import project5 from '../assets/Project/project5.png';



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState([]);


    const projects = [
        {
            id: 1,
            name: "DocService",
            description: "This project was very interesting for me because in this project I can implement my own thinking and creativity. I always try to learn something new and to explore extra features that I don't know. In this project, I use Stripe payment system, react-hook-form, react-day-picker, react-multi-carousel etc. Which is very interesting and attractive. I used JWT(JSON Web Token) in this project. Which is more stale security for my website.",
            Technology: ' React,Tailwind,Daisy Ui,Mongodb,Firebase.',
            img: project5,
            githubUrl: 'https://github.com/siamalrafi/docservice',
            LiveUrl: 'https://docservice-1932a.web.app/'
        },
        {
            id: 2,
            name: "Mirraw E-commerce",
            description: "This is a simple e-commerce website . There are several types of second hand products available. You can sell and buy any products if you want to purchase. There are many different Seller who are want to sell there products in this website",
            Technology: ' React,Tailwind,Daisy Ui,Mongodb,Firebase.',
            img: project1,
            githubUrl: 'https://github.com/siamalrafi/Mirraw-client-website',
            LiveUrl: 'https://mirraw-ebac6.web.app/'
        },
        {
            id: 3,
            name: "Skillshare Academy",
            description: "This project was bootstrapped with Create React App. This is the top class online education platform in the world. In this platform you can learn something new . Many online course are available in here",
            Technology: 'React,Tailwind,Mongodb,Firebase, Private Route,Pdf package',
            img: project2,
            githubUrl: 'https://github.com/siamalrafi/Skillshare-Academy-projects',
            LiveUrl: 'https://skillshare-academy.web.app/'
        },
        {
            id: 4,
            name: "QuizMaster ",
            description: 'This is a quiz application that you can quiz some interesting topics . There are some most popular and important topics.',
            Technology: 'React,Tailwind,Mongodb,Firebase, Private Route',
            img: project4,
            githubUrl: 'https://github.com/siamalrafi/QuizMaster-',
            LiveUrl: 'https://idyllic-madeleine-af9e0e.netlify.app/'
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

                        <SingleProject key={i}
                            project={project}
                            setSelectedProject={setSelectedProject}
                            selectedProject={selectedProject}>

                        </SingleProject>
                    )
                }


            </div>




        </div >
    );
};

export default Projects;