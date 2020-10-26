import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import Services from '../component/Services'
import FeatureRooms from '../component/FeatureRooms';

const Home = () => {
    return (
    <React.Fragment>
        <Hero>
            <Banner 
            title="Luxurious Rooms"
            subtitle="delux room starts at $299">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner> 
        </Hero>
        <Services/>
        <FeatureRooms/>
    </React.Fragment>
    ) 
}

export default Home;
