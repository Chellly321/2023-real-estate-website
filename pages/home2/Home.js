import React from 'react';
import Card from '../../components/Card';
import HeaderSlider from '../../components/HeaderSlider'
import "./Home.css"; 

const Home = () => {
    return (
        <div>
            <HeaderSlider />

        <div className="row">
        <Card />
        </div>
        </div>
    );
}

export default Home;
