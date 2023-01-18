import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='p-8 '>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
          
        </div>
    );
};

export default Home;