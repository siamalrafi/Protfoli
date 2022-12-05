import React from 'react';

const MySkills = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl'>My
                    <span className='ml-3 text-primary'>Skills</span>
                </h1>
            </div>



            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>

                <div>
                    <h1>HTML</h1>
                    <progress className="h-4 progress progress-primary w-56" value="95" max="100">95%</progress>
                </div>
                <div>
                    <h1>CSS</h1>
                    <progress className="h-4 progress progress-primary w-56" value="95" max="100">95%</progress>
                </div>
                <div>
                    <h1>HTML</h1>
                    <progress className="h-4 progress progress-primary w-56" value="95" max="100">95%</progress>
                </div>
                <div>
                    <h1>HTML</h1>
                    <progress className="h-4 progress progress-primary w-56" value="95" max="100">95%</progress>
                </div>
            </div>


        </div >
    );
};

export default MySkills;