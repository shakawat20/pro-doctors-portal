import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor,refetch ,setDeletingDoctor}) => {
    const { name,email } = deletingDoctor;
    const handleDelete = () => {
        fetch(`https://pro-doctors-portal-server-side.vercel.app/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor :${name}`)
                    setDeletingDoctor(null)
                    refetch()
                }
            })

    }
    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <button className="btn btn-xs btn-error" onClick={() => handleDelete()}>Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DeleteConfirmModal;