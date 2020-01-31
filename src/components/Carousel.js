import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const CarouselDisplay = () => {


  return <div className="carousel-section">
    <Carousel>
      <Carousel.Item>
        <a href="https://marepstein.github.io/project-1/"><img
          className="carousel-img"
          src="https://i.imgur.com/rNT6Twp.png" 
          alt="First slide"
        /></a>
        <Carousel.Caption>
          <h3>Space Invaders Game</h3>
          <p>A modern version of the arcade game, using HTML, CSS and JavaScript. The game included aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-img"
          src="https://i.imgur.com/Vmtbptm.png" 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Moon to Sun</h3>
          <p>A React app, using an external API to gather data. We manipulated the data to create an application that displays weather, sun and moon information based on the user inputted location, followed by horoscopes. We used CSS animations to create a flow for the user. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <a href="thekitchenapp.herokuapp.com/"><img
          className="carousel-img"
          src="https://i.imgur.com/sbIPJUk.png"
          alt="Third slide"
        /></a>

        <Carousel.Caption>
          <h3>The Kitchen</h3>
          <p>We created a full-stack CRUD application providing users with both recipes and restaurants, which can be stored to their profile. We curated our own database using RESTful API, MongoDB, Express and Node.js. I focused on a number of features, including restaurant-related pages, the landing page,  filtering and search bar and styling. I used SASS, Bulma and Adobe Photoshop.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <a href="greengarmsguide.herokuapp.com/#/"><img
          className="carousel-img"
          src="https://i.imgur.com/yetNxIp.png"
          alt="Fourth slide"
        /></a> 

        <Carousel.Caption>
          <h3>Green Garms</h3>
          <p>A full-stack web and mobile CRUD app to help users contribute to sustainable fashion. For the backend, we used Python Django, Django REST Framework and Postgres. We populated two databases to form a ‘clothes swap’ functionality, based on the provision of user registration, and a brand sustainability ranking. For the frontend, we used React and JavaScript, styled using SASS. Mobile Optimized. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>


}

export default CarouselDisplay