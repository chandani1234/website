import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import image2 from './../assets/bg1.jpg';
import image3 from './../assets/bg2.jpg';
import image4 from './../assets/bg3.jpg';

const Corousel=() =>{
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-200"
            src={image2} 
             height="700px"
            alt="YOUR GUIDE TO INVEST"
          />
          <Carousel.Caption>
          <h3 style={{fontSize: "50px",fontFamily:"600",color:" #fff"}}>YOUR GUIDE TO INVEST </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={500}>
          <img
            className="d-block w-100"
            src={image3}
            height="700px"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={image4}
            height="700px"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )

    
}
export default Corousel;
