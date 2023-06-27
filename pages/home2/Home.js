import React from 'react';
import Slider from 'react-slick';

import Card from '../../components/Card';
import CarouselComponent from '../../components/CarouselComponent';
import HeaderSlider from '../../components/HeaderSlider'
import "./Home.css"; 

const Home = () => {
    
    return (
        <>
        <div>
            <HeaderSlider />
            <CarouselComponent/>    

        </div>
        </>
    );
}

export default Home;
