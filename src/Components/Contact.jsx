import React from 'react';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    const seendMassage = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const massage = form.massage.value;
        console.log(name, email, massage);


    }




    return (
        <div>
            <div id='contact' className='text-center font-bold text-3xl rounded-box'>
                <h1 className='text-5xl my-20'>Get in
                    <span className='ml-3 text-primary'>Touch</span>
                </h1>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-10'>

                <div data-aos="fade-right" data-aos-duration="500" className='my-10 w-1/3'>
                    <div className='flex items-center gap-5 mx-5'>
                        <FontAwesomeIcon icon={faPhone} className='text-2xl' />
                        <div>
                            <h1>Phone</h1>
                            <p>(+088)01815485598</p>
                        </div>
                    </div>
                    <div className='flex items-center my-5 gap-5 mx-5'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-2xl' />
                        <div>
                            <h1>Email</h1>
                            <p>rahathasandipto@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mx-5'>
                        <FontAwesomeIcon icon={faLocation} className='text-2xl' />
                        <div>
                            <h1>Location</h1>
                            <p>Mymensingh<span>,Bangladesh</span> </p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="500">
                    <form onSubmit={seendMassage}>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                            <div className='my-3'>
                                <label htmlFor="name" className="">Name</ label>
                                <br />
                                <input name='name' type="text" placeholder="Type your Name" className="input input-bordered input-md w-full max-w-xs" required />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="email" className="">Email</ label>
                                <br />
                                <input name='email' type="email" placeholder="Type Your Email" className="input input-bordered input-md w-full max-w-xs" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="">Massage</ label>
                            <textarea name='massage' type='text' className=" textarea w-full textarea-bordered" placeholder="Write your massage"></textarea>
                        </div>
                        {/* <button className='btn btn-primary my-5'>Send Massage</button> */}
                        <input type="submit" className='btn btn-primary my-5' value="Send Massage" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Contact;