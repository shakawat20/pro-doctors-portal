import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots ,price} = treatment;
    const formattedDate = format(date, "PP")

    console.log(formattedDate)



    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value,
            price:price
        }

        fetch('https://pro-doctors-portal-server-side.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
               
            
                if (data.success) {
                    toast(`Appointment is set,${formattedDate} at ${slot}`)
                    // console.log("appointment",formattedDate,slot)
                }
                else{
                    toast.error(`you already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                    // console.log(" already set appointment", data.booking?.slot)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName || " d"} p className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email || " e"} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </form>


                   
                </div>
            </div>
        </div>
    );
};

export default BookingModal;