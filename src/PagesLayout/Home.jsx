
import Banner from '../components/Banner/Banner';
import Service from '../components/Service/Service';
import CareerPath from '../components/CareerPath/CareerPath';
import CareerAdvisor from '../components/CareerAdvisor/CareerAdvisor';
import MessageCareer from '../components/MessageCareer/MessageCareer';
import ChooseUs from '../components/ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <CareerAdvisor></CareerAdvisor>
            <MessageCareer></MessageCareer>
            <ChooseUs></ChooseUs>
            <CareerPath></CareerPath>
            
        </div>
    );
};

export default Home;