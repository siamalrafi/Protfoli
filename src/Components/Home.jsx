import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import protfolioImg from '../assets/protfolio-img.png';
import Typed from "react-typed"



const Home = () => {

    return (
        <div>
            <div id='home' className='grid md:grid-cols-2 sm:grid-cols-1 m-8'>

                <div
                    data-aos="fade-right" data-aos-duration="800"
                    className='lg:mt-24 h-96'>
                    <h1 className="text-2xl ">
                        Hi! I am
                    </h1>
                    <h1 className='my-3 font-bold uppercase text-5xl text-[#2563eb]'>
                        Md Siam Al Rafi</h1>

                    <h1 className='my-10 font-bold text-3xl'>
                        I am a <Typed
                            strings={[
                                "Web Developer",
                                "Programmer.",
                                "Developer."
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop

                        /></h1>



                    <div className='flex'>
                        <a href="#contact">
                            <button className="btn btn-primary text-center rounded mx-2">
                                Get in Touch</button>
                        </a>
                        <a href="https://drive.google.com/uc?export=download&id=1F23BtqyuO9jKW0Qykq0bIlW-T4dzbAR9"
                            role="button" target="_blank">
                            <button
                                className="btn btn-outline text-primary rounded hover:bg-primary ">
                                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                <span className='ml-2'>
                                    Download Resume
                                </span>
                            </button>
                        </a>

                        {/* 
https://drive.google.com/uc?export=download&id=1F23BtqyuO9jKW0Qykq0bIlW-T4dzbAR9 */}

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="800"
                    className='lg:m-12 flex flex-row-reverse'>
                    <div className="avatar">
                        <div className="w-80 mask mask-hexagon">
                            <img
                                src={protfolioImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;