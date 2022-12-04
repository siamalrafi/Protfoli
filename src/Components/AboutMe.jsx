import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1>About Me</h1>
            </div>


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="w-80 mask mask-squircle">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;