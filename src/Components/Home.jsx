import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 m-10 '>

                <div className='lg:mt-24 h-96'>
                    <h1 className="text-2xl ">
                        Hi! I am
                    </h1>
                    <h1 className='my-3 font-bold uppercase text-5xl text-[#2563eb]'>
                        Md Siam Al Rafi</h1>
                    <h1 className='my-10 font-bold text-3xl'>
                        I am A Web Developer.</h1>
                    <button className="btn btn-primary text-center rounded mx-2">Get in Touch</button>
                    <button className="btn btn-outline text-primary rounded hover:bg-primary ">
                        Download Resume</button>
                </div>

                <div className='lg:m-12 flex flex-row-reverse'>
                    <div className="avatar">
                        <div className="w-80 mask mask-hexagon">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;