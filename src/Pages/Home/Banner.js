import React from 'react';
import img from "../../assets/images/chair.png"
import PrimaryButton from '../Shared/PrimaryButton';

import "./Banner.css"



const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 " >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} style={{ height: "400px", width: "800px" }}  alt="home"/>
                <div className="text-left " id='backgroundImage' >
                    <div >
                        <h1 className="text-5xl  font-bold">Box Office News!</h1>
                        <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get start</PrimaryButton>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;