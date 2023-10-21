import React from 'react';
import { useState } from 'react';
import './Specialties.css'
import Carousel from 'react-bootstrap/Carousel';
import Adults from '../../Assets/Adults.avif'
import children from '../../Assets/children.avif'
import Family from '../../Assets/Family.avif'
import Trauma from '../../Assets/Trauma.avif'

function Specialties() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  
    <div className='content' id='/Specialties'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={Trauma} className="d-block w-100 carousel-item-content" alt='img' />
          <Carousel.Caption>
            <h3>Trauma</h3>
            <p>EMDR Therapy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={children} className="d-block w-100 carousel-item-content" alt='img' />
          <Carousel.Caption>
            <h3>Children 10 and over</h3>
            <p>Behavior - Social - ADD - Autism - Spectrum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Family} className="d-block w-100 carousel-item-content" alt='img' />
          <Carousel.Caption>
            <h3>Families</h3>
            <p>
              Parenting Strategies - relationships
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Adults} className="d-block w-100 carousel-item-content" alt='img' />
          <Carousel.Caption>
            <h3>Adults</h3>
            <p>
              Depression - Anxiety - Anger Management - Grief and Loss
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='specialties-title'>Specialties</div>
    </div>
  
  );
}

export default Specialties;
