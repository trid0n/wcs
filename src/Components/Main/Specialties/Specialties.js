import React from 'react';
import { useState } from 'react';
import './Specialties.css'
import Carousel from 'react-bootstrap/Carousel';
import HeroImage from '../../Assets/HeroImage.jpg'
import HeroImage1 from '../../Assets/HeroImage1.jpg'
import HeroImage2 from '../../Assets/HeroImage2.jpg'


function Specialties () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='content' id='/Specialties'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={HeroImage} className="d-block w-100 carousel-item-content" alt='img'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={HeroImage1} className="d-block w-100 carousel-item-content" alt='img'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={HeroImage2} className="d-block w-100 carousel-item-content" alt='img'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
    

export default Specialties;