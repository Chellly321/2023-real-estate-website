import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css'

const FirstPage = () => {


    return (
        <div className='first-page-container'>
            <div className="banner-area">
                <div className="content-area">
                    <div className="content">
                        <h1 className='banner-header'>FIND YOUR HOME</h1>

                    </div>
                </div>
                <div className="btn-container">
                        <Link to='/home' className='btn-home'>Welcome <br/>
                        <span>Click here!</span></Link>
                        </div>
            </div>
        </div>
    );
}

export default FirstPage;
