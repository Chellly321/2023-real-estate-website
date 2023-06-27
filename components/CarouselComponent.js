import React from 'react';
import Slider from 'react-slick';
import PropertyData from '../data/PropertyData';

import './CarouselComponent.css'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';

const CarouselComponent = () => {
  const rentProperties = PropertyData.filter(property => property.listingType === 'Rent')
  const buyProperties = PropertyData.filter(property => property.listingType === 'Buy')

  const settings = {
      dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
      <>
        <h2 className='rent-styling'>Rent Properties</h2>
        <Slider {...settings}>
        {rentProperties.map(property => {
          return (
          <div key={property.id}>
              <div className='column'>
                <div className="single-property">
                  <div className="card-container" key={property.id}>
                    <div className="property-thumb">
                      <div className="property-header">
                      <span className={`${property.listingType === 'Rent' ? 'rent' : 'buy'}`}>{property.listingType}</span>
                      </div>
                      <img 
                        src={property.image}
                        className='property-image'
                        alt='property image'
                      />
                      <div className="property-info">
                        <div className="first-info">
                        {/* <span className='type-tag'><b>{property.type}</b></span> */}
                        <h3 className='price-tag'>{property.price}</h3>
                        </div>

                        <div className="location-mark">
                          <span className="location">{property.address}</span> <br></br>
                          <span className="location">{property.location}</span>
                      
                          <ul>
                            <li className="card-footer-list">
                              <SquareFootIcon className='card-icons' />
                              <span>{property.surface}</span>
                            </li>
                            <li className="card-footer-list">
                              <BedIcon className='card-icons' />
                              <span>{property.bedrooms}</span>
                            </li>
                            <li className="card-footer-list">
                              <BathroomIcon className='card-icons'/>
                              <span>{property.bath}</span>
                            </li>
                          </ul>
                        </div>
                    </div>
              </div>
            </div>
            </div>
          </div>
          </div>

          )
        })}
        </Slider>


        <h2 className='buy-styling'>Buy Properties</h2>
        <Slider {...settings}>
        {buyProperties.map(property => {
          return (
          <div key={property.id}>
              <div className='column'>
                <div className="single-property">
                  <div className="card-container" key={property.id}>
                    <div className="property-thumb">
                      <div className="property-header">
                      <span className={`${property.listingType === 'Rent' ? 'rent' : 'buy'}`}>{property.listingType}</span>
                      </div>
                      <img 
                        src={property.image}
                        className='property-image'
                        alt='property image'
                      />
                      <div className="property-info">
                        <div className="first-info">
                        {/* <span className='type-tag'><b>{property.type}</b></span> */}
                        <h4 className='price-tag'>{property.price}</h4>
                        </div>

                        <div className="location-mark">
                          <span className="location">{property.address}</span> <br></br>
                          <span className="location">{property.location}</span>
                      
                          <ul>
                            <li className="card-footer-list">
                              <SquareFootIcon className='card-icons' />
                              <span>{property.surface}</span>
                            </li>
                            <li className="card-footer-list">
                              <BedIcon className='card-icons' />
                              <span>{property.bedrooms}</span>
                            </li>
                            <li className="card-footer-list">
                              <BathroomIcon className='card-icons'/>
                              <span>{property.bath}</span>
                            </li>
                          </ul>
                        </div>
                    </div>
              </div>
            </div>
            </div>
          </div>
          </div>

          )
        })}
        </Slider>

     </>
    );
}
export default CarouselComponent;
