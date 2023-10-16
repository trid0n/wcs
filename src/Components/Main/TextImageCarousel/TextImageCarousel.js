import React from 'react';
import './TextImageCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import HeroImage from '../../Assets/HeroImage.jpg'
import HeroImage1 from '../../Assets/HeroImage1.jpg'
import HeroImage2 from '../../Assets/HeroImage2.jpg'

function TextImageCarousel () {

    return (
        <div>
          <Carousel>
      <Carousel.Item>
      <img src={HeroImage} text="First slide" className='slider-pics'alt='img'/>
        <div className='carousel-caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImage1} text="Second slide" Name='slider-pics' alt='img'/>
        <div className='carousel-caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <img src={HeroImage2} text="Third slide" className='slider-pics' alt='img'/>
        <div className='carousel-caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
        </div>

    );
}
    

export default TextImageCarousel;