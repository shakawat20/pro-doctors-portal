import React from 'react';

const InfoCard = ({img,bgClass}) => {
    return (
        <div class={`card card-side ${bgClass} shadow-xl mx-2 px-4 sm:mt-12`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
             
            </div>
        </div>
    );
};

export default InfoCard;