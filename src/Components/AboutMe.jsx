import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl'>About
                    <span className='ml-3 text-primary'>Me</span>
                </h1>
            </div>

            <div id='about' className="hero">
                <div className="m-5 hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="w-80 mask mask-squircle">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>

                    <div className='lg:px-10'>
                        <h1 className='w-full'>Hey! I am <b>Md Siam Al
                            Rafi</b>, a full-stack developer. I am very interested in this sector. I'm currently studying at Mymensingh Polytechnic Institute at power engineering.
                        </h1>
                        <p>
                            I am a self-confident, hardworking, and tech-enthusiast person. I always try to learn and explore something new. And I want to use my skills and knowledge in web development.
                            My biggest strength is that I am a punctual and positive-thinking person. Finally, I want to express my skills and experience with the best company.
                        </p>

                        <div className='my-8'>
                            <button
                                className="btn btn-outline text-primary  hover:bg-primary rounded-full">
                                <FontAwesomeIcon icon={faDownload} />

                                <span className='ml-2'>
                                    Download Resume
                                </span></button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;