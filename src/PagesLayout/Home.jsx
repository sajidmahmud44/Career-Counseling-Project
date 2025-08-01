import React from 'react';
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';
import CareerPath from '../components/CareerPath/CareerPath';
import CareerAdvisor from '../components/CareerAdvisor/CareerAdvisor';
import MessageCareer from '../components/MessageCareer/MessageCareer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MessageCareer></MessageCareer>
            <CareerPath></CareerPath>
            <CareerAdvisor></CareerAdvisor>
        </div>
    );
};

export default Home;