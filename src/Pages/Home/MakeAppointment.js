import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';
    
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{background:`url(${appointment})`,height:"550px"}}>
            <div  className='flex-1 hidden lg:block' >
                <img src={doctor} className='mt-[-100px]' style={{height:"650px"}} />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'> Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment</h2>
                <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur consectetur nam, iure, id excepturi, voluptates accusantium cum praesentium necessitatibus voluptas commodi cumque fugiat aperiam eos amet expedita harum deleniti magnam laudantium nesciunt. Nulla unde minima, in ratione temporibus necessitatibus?</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;