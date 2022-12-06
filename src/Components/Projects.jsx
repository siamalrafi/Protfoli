import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Projects = () => {
    const Projects = [1, 2, 3, 4];

    return (
        <div id='projects'>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-20'>My Recent
                    <span className='ml-3 text-primary'>works</span>
                </h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center mx-24'>
                {
                    Projects.map((project, i) =>
                        <div key={i} className="max-w-xs mt-10 rounded-md shadow hover:shadow-2xl">
                            <img src="https://source.unsplash.com/random/300x300/?2" alt=""
                                className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />

                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-black font-semibold tracking-wide">Donec lectus leo</h2>
                                    <p className="text-black">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                </div>

                                <div className='my-8 text-center'>
                                    <button className="btn btn-sm btn-outline text-black hover:bg-primary ">

                                        {/* <FontAwesomeIcon icon={} /> */}


                                        <span className='ml-2'>GitHub</span>
                                    </button>
                                    <button className="btn btn-sm text-center rounded hover mx-4">
                                        <FontAwesomeIcon icon={faEye} />
                                        <span className='ml-2'>Live Link</span></button>
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