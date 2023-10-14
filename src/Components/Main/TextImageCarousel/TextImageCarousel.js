import React from 'react';
import './TextImageCarousel.css'


function TextImageCarousel () {
    return (
        <div>
             {/*carousel-fade=carousel transition effect*/}
    <div id="myCarousel" className="carousel slide 
    carousel-face"
    data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel"
            data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel"
            data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel"
            data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {/*code below can be copied to create new slide but 
            remember to add another li item and set it to data-slide-to+1*/}
            <div className="carousel-item active" 
            data-interval="15000">
            {/*data interval=duration until transition (in milliseconds)*/}
            <div className="overlay-image" style={{ backgroundImage: `url(./Assets/lol.jpg)` }}></div>
        <div className="container">
            <h1>Example Headline</h1>
            <p>awd awd awd awd awd 
              adw awdawd awd awd aw
              ad awd awda wdawd adwdawd </p>
              <a href="#" className="btn btn-lg btn-primary">
                Sign up today
              </a>
        </div>
            </div>
            <div className="carousel-item"
            data-interval="15000">
              <div className="overlay-image" 
              style={{ backgroundImage: `url(./Assets/HeroImage.jpg)` }}></div>

      <div className="container">
          <h1>Headline Example</h1>
          <p>awd awd awd awd awd 
            adw awdawd awd awd aw
            ad awd awda wdawd adwdawd </p>
            <a href="#" className="btn btn-lg btn-primary">
              Sign up today
            </a>
      </div>
            </div>
            <div className="carousel-item"
            data-interval="15000">
              <div className="overlay-image" 
              style={{ backgroundImage: `url(../../Assets/HeroImage.jpg)` }}></div>
              <div className="container">
                  <h1>Example Headline</h1>
                  <p>awd awd awd awd awd 
                    adw awdawd awd awd aw
                    ad awd awda wdawd adwdawd </p>
                    <a href="#" className="btn btn-lg btn-primary">
                      Sign up today
                    </a>
              </div>
            </div>
        </div>
        <a href="#myCarousel"
        className="carousel-control-prev" role="button"
        data-bs-slide="prev">
              <span className="sr-only">Previous</span>
              <span className="carousel-control-prev-icon"
              aria-hidden="true"></span>
      </a>
      <a href="#myCarousel"
        className="carousel-control-next" role="button"
        data-bs-slide="next">
              <span className="sr-only">next</span>
              <span className="carousel-control-next-icon"
              aria-hidden="true"></span>
      </a>
    </div>
       
        </div>

    );
}
    

export default TextImageCarousel;