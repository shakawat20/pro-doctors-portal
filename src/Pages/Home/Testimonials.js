import React from 'react';
import quote from "../../assets/icons/quote.svg"
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people3.png"
import people3 from "../../assets/images/people3.png"
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id_: 1,
            name: "winson herry",
            review: "",
            location:"california",
            img: people1
        },
        {
            id_: 1,
            name: "winson herry",
            review: "",
            location:"california",
            img: people2
        },
        {
            id_: 1,
            name: "winson herry",
            review: "",
            location:"california",
            img: people3
        }

    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary foot-bold'>Testimonials</h4>
                    <h2 className='text-3xl'> what our patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;