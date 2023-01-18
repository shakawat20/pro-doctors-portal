import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-portal-server-ten-kappa.vercel.app/services').then(res => res.json()))

    const imageStorageKey = '25be8eb0330c3d432b984631872a8253'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    console.log(result)
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    fetch('https://doctors-portal-server-ten-kappa.vercel.app/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('doctor added successfully')
                                reset();

                            }
                            else{
                                toast.error('Failed to add the doctor')
                            }
                        })
                }
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    /**
     * third party storage // fre open public storage is ok for practice project
     * your own storage in your own  server
     * database:mongodb
     * 
     * yup : ti validate file :search
     */



    return (
        <div>
            <h2 className='text-2xl'>Add a new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your email</span>

                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input
                        type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                    </label>
                </div>


                <div className="form-control w-full max-w-xs input-bordered">
                    <label className="label">
                        <span className="label-text">specialty</span>
                    </label>
                    <select {...register('specialty')} className="select select-accent w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >
                                {service.name}
                            </option>)

                        }


                    </select>

                    <label className="label">
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}

                    </label>
                </div>


                <input className='btn w-full max-w-xs' type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddDoctor;