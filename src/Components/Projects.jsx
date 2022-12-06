import React from 'react';

const Projects = () => {
    const Projects = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-12'>My Recent
                    <span className='ml-3 text-primary'>works</span>
                </h1>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
                {
                    Projects.map((project, i) =>

                        <div key={i} className="card w-80">
                            <img
                                className="rounded-xl"
                                src="https://placeimg.com/400/225/arch" alt="Shoes" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    )
                }


            </div>




        </div>
    );
};

export default Projects;