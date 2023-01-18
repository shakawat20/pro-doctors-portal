import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
 
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 px-12"  >
            <InfoCard img={clock} bgClass={"bg-gradient-to-r from-primary to-secondary"}></InfoCard>
            <InfoCard img={marker} bgClass={"bg-accent"}></InfoCard>
            <InfoCard img={phone} bgClass={"bg-gradient-to-r from-primary to-secondary"} ></InfoCard>
            
        </div>
    );
};

export default Info;