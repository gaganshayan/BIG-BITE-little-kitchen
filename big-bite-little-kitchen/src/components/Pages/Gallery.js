import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


function Gallery() {
    return (
        <>
        <div className="title">
            <h1>Gallery</h1> 
        </div>

        <div className="PictureCarousel">
            <Carousel>
                {/* <--- Image 1: Pancakes ---> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606707960/Pancake_Stack_kgvtru.jpg"
                    alt="Buttermilk Pancakes"
                    
                    />
                <Carousel.Caption>
                    <h3>Buttermilk Pancakes</h3>
                    <p>A fullstack of freshly made buttermilk pancakes.</p>
                </Carousel.Caption>
                </Carousel.Item>


                {/* <--- Image 2: Turkey Chilli ---> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606707958/Chilli_Frito_Pie_ta7vta.jpg"
                    alt="Turkey Chilli"
                    
                    />
                <Carousel.Caption>
                    <h3>Turkey Chilli</h3>
                    <p>A homemade version of frito pie, made with 80/20 Ground Turkey.</p>
                </Carousel.Caption>
                </Carousel.Item>


                {/* <--- Image 3: Neopolitan Pizza ---> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606707960/Homemade_Pizza_funna6.jpg"
                    alt="Neopolitan Pizza"
                    
                    />
                <Carousel.Caption>
                    <h3>Neopolitan Pizza</h3>
                    <p>Homemade Neopolitan Pizza made fresh at home.</p>
                </Carousel.Caption>
                </Carousel.Item>


                {/* <--- Image 4: Lemon Butter Salmon ---> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606707960/Lemon_Butter_Salmon_Steak_fdnboz.jpg"
                    alt="Lemon Butter Salmon"
                    
                    />
                <Carousel.Caption>
                    <h3>Lemon Butter Salmon Steak</h3>
                    <p>Lemon Butter Salmon Steak fresh out of the oven.</p>
                </Carousel.Caption>
                </Carousel.Item>


                {/* <--- Image 5: NY Strip Steak ---> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606707961/Sliced_Steak_k6i1y8.jpg"
                    alt="NY Strip Steak"
                    
                    />
                <Carousel.Caption>
                    <h3>NY Strip Steak</h3>
                    <p>Sliced 12oz. NY Strip Steak, cooked medium-rare, ready to serve.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )};
export default Gallery;