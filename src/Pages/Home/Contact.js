import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from "../../assets/images/appointment.png"

const Contact = () => {
    return (
        <div className='mt-5' style={{background:`url(${bg})`,height:"500px"}}>
            <h1 className='text-primary text-xl font-bold'>Contact Us</h1>
            <h2 className='text-white'>Stay connected with us</h2>



            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs mt-5" /><br />


            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs mt-5" /><br />

            <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs m-5 mb-8" /><br />



            <PrimaryButton>Submit</PrimaryButton>

        </div>
    );
};

export default Contact;