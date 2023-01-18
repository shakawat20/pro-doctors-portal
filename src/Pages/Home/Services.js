import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from "../../assets/images/whitening.png"
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: '',
            img: teeth
        },
    ]
    return (
        <div className='my-24 '>
            <div className=''>
                <h3 className='text-primary text-xl font-bold'>Our services</h3>
                <h2 className='text-4xl'> Services we provide</h2>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-5 sm:gap-5 "> 
                {
                services.map(service => <Service img={service.img} _id={service._id} name={service.name}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;