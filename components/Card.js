import React from 'react'
import PropertyData from '../data/PropertyData'

// styling and icons
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import './Card.css'



export default function Card() {

  return (
    <>   
        {PropertyData.map(property => {
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
                        <span className='type-tag'><b>{property.type}</b></span>
                        <h3 className='price-tag'><b>{property.price}</b></h3>
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
    </>

  )
}


