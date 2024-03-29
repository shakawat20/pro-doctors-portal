import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://pro-doctors-portal-server-side.vercel.app/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <h1>my appointment {appointments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>

                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {
                                            (a.price && a.paid) && <span className='text-success'> Paid</span>
                                        }
                                        {/* {(a.price && a.paid) && <span className='btn btn-xs btn-success'>Paid</span>} */}
                                    </td>

                                </tr>


                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;