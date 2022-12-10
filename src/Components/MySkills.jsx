import React from 'react';

const MySkills = () => {
    return (
        <div id='skills' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
            <div className='my-20 text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-10'>My
                    <span className='ml-3 text-primary'>Skills</span>
                </h1>
            </div>

            <div className='grid gap-10 px-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>

                <div>
                    <h1>HTML</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="95" max="100"></progress>
                        <span>95%</span>
                    </div>
                </div>
                <div>
                    <h1>CSS</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="90" max="100"></progress>
                        <span>90%</span>
                    </div>
                </div>
                <div>
                    <h1>JavaScript</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="80" max="100"></progress>
                        <span>80%</span>
                    </div>
                </div>
                <div>
                    <h1>Bootstrap</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="95" max="100"></progress>
                        <span>95%</span>
                    </div>
                </div>
                <div>
                    <h1>Tailwind</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="95" max="100"></progress>
                        <span>95%</span>
                    </div>
                </div>
                <div>
                    <h1>React</h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="80" max="100"></progress>
                        <span>80%</span>
                    </div>
                </div>
                <div>
                    <h1>Node Js </h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="75" max="100"></progress>
                        <span>75%</span>
                    </div>
                </div>
                <div>
                    <h1>MongoDb </h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="75" max="100"></progress>
                        <span>75%</span>
                    </div>
                </div>
                <div>
                    <h1>Firebase </h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="90" max="100"></progress>
                        <span>90%</span>
                    </div>
                </div>
                <div>
                    <h1>Express Js </h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="75" max="100"></progress>
                        <span>75%</span>
                    </div>
                </div>
                <div>
                    <h1>Python </h1>
                    <div>
                        <progress className="h-5 progress progress-primary w-56" value="30" max="100"></progress>
                        <span>30%</span>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default MySkills;