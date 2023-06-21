import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {
    const { id } = useParams()
    const url = `https://doctors-portal-server-ten-kappa.vercel.app/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello ,{appointment.patientName}</p>
                    <h2 className="card-title">Pay for {appointment.treatment}</h2>
                    <p>we will see you on <span className='text-orange-700'>{appointment.date} </span>on {appointment.slot}</p>
                    <p>Please pay : $ {appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            appointment={appointment}

                        />
                    </Elements>
                </div>
            </div>
        </div>


    );
};

export default Payment;