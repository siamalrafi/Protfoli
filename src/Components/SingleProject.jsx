import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const SingleProject = ({ project, setSelectedProject, selectedProject }) => {


    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="1000" key={project.id} className="max-w-xs mt-10  rounded-md shadow-2xl hover:shadow-3xl shadow-blue-500/50">
                <img src={project.img} alt="project.img"
                    className="border-2 border-black object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />

                <div className="flex flex-col justify-between p-6">
                    <div className="space-y-2">
                        <h2 className="text-black font-semibold tracking-wide">{project.name}</h2>
                        <p className="text-black">
                            {project.description.slice(0, 100)}
                        </p>

                        <p className='font-bold'>Technology : {project.Technology}</p>
                    </div>

                    <div className='my-8 text-center'>
                        <a href={project.githubUrl} target="_blank" >
                            <button className="btn btn-sm btn-outline text-black hover:bg-primary ">
                                <FaGithub />
                                <span className='ml-2'>
                                    GitHub</span>
                            </button>
                        </a>

                        <a href={project.LiveUrl} target="_blank" >
                            <button className="btn btn-sm text-center rounded hover mx-4">
                                <FontAwesomeIcon icon={faEye} />
                                <span className='ml-2'>Live Link</span></button>
                        </a>
                    </div>




                    {/* -------------------------
Selected Projects are not open yet.
--------------------------------- */}



                    {/*  <div className='flex justify-center'>
                        <label
                            onClick={() => setSelectedProject(project)}
                            htmlFor="my-modal-5" className="btn bg-gradient-to-r from-blue-500 to-cyan-700 ">Details</label>
                    </div>

                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p>{selectedProject.description}</p>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
 */}
                    {/* -------------------------
--------------------------------
--------------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default SingleProject;