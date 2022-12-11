import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div id='blogs' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                <div className='my-20 text-center font-bold text-3xl rounded-box'>
                    <h1 className='text-5xl my-10'>My
                        <span className='ml-3 text-primary'>Blogs</span>
                    </h1>
                </div>
                <div className="p-6 py-12 dark:text-gray-900">
                    <h1 className='text-3xl text-center font-semibold'>Coming soon...</h1>

                </div>
            </div>
        </div>
    );
};

export default Blogs;