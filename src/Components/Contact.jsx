import React from 'react';

const Contact = () => {
    return (
        <div>

            <div className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-20'>Get in
                    <span className='ml-3 text-primary'>Touch</span>
                </h1>
            </div>



            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-10'>

                <div className='w-1/3'>
                    <div>
                        <h1>Phone</h1>
                        <p>(+088)01815485598</p>
                    </div>
                    <div>
                        <h1>Email</h1>
                        <p>rahathasandipto@gmail.com</p>
                    </div>
                    <div>
                        <h1>Location</h1>
                        <p>Mymensingh, Bangladesh</p>
                    </div>
                </div>

                <div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                        <div  >
                            <label htmlFor="name" className="">Name</ label>
                            <br />
                            <input type="text" placeholder="Type your Name" className="input input-bordered input-md w-full max-w-xs" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="">Email</ label>
                            <br />
                            <input type="email" placeholder="Type Your Email" className="input input-bordered input-md w-full max-w-xs" required />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <label htmlFor="name" className="">Massage</ label>
                        <textarea className=" textarea w-full textarea-bordered" placeholder="Write your massage"></textarea>
                    </div>
                    <button className='btn'>Send Massage</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;