import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-3">
                    <a className="link link-hover" href='#home'>
                        <b className='font-bold'>Home</b></a>
                    <a className="link link-hover" href='#about'>
                        <b className='font-bold'>About</b>  </a>
                    <a className="link link-hover" href='#skills'>
                        <b className='font-bold'>My Skills</b>  </a>
                    <a className="link link-hover" href='#projects'>
                        <b className='font-bold'>Projects</b>    </a>
                    <a className="link link-hover" href='#contact'>
                        <b className='font-bold'>Contact</b>    </a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#">
                            <button>
                                <FaLinkedin className='text-4xl hover:text-primary rounded-sm' />
                            </button>
                        </a>

                        <a href="#">
                            <FaGithub className='text-4xl hover:text-primary rounded-sm' />
                        </a>
                        <a>

                            <FaYoutube className='text-4xl hover:text-primary rounded-sm' />

                        </a>

                        <a href="#">
                            <FaFacebookSquare className='text-4xl hover:text-primary rounded-sm' />
                        </a>

                    </div>
                </div>
                <div>
                    <p className='text-xl'>Copyright © 2022 - All right reserved by <b>Siam Al Rafi</b></p>
                </div>
            </footer >
        </div >
    );
};

export default Footer;