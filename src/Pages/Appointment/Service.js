import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots,price} = service;
   
    return (
        <div className="card lg:w-50 lg:m-5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> :
                        <span className='text-red-500'> No Slot Available</span>

                } 
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small>Price:$ {price}</small> Available</p>
                <div className="card-actions justify-center">
                    <label for="booking-modal"

                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase"

                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;