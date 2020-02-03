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
          <p>This was my first project at GA, in which, we were given a choice of games to recreate. I chose to create a modern version of the Space Invaders, using <strong style={{ color: '#FFF' }}><em>HTML, CSS and JavaScript.</em></strong> The game includes the use of numerous functions to create necessary functionality, including; aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
			<a href="https://marepstein.github.io/sun-to-moon/"><img
          className="carousel-img"
          src="https://i.imgur.com/Vmtbptm.png" 
          alt="Second slide"
        /></a>

        <Carousel.Caption>
          <h3>Moon to Sun</h3>
          <p>A paired project creating <strong style={{ color: '#FFF' }}><em>a React app, using an external API</em></strong>  to gather data. We manipulated the data to create an application that displays weather, sun and moon information based on the user inputted location, followed by horoscopes. We used <strong style={{ color: '#FFF' }}><em>CSS animations</em></strong> to create a flow for the user. </p>
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
          <p>For this project, I was required to work in a team of three. We created a  <strong style={{ color: '#FFF' }}><em>full-stack CRUD application</em></strong> providing users with both recipes and restaurants, which can be stored to their profile. We curated our own database using  <strong style={{ color: '#FFF' }}><em>RESTful API, MongoDB, Express and Node.js.</em></strong> I focused on a number of features, including restaurant-related pages, the landing page,  filtering and search bar and styling. I used SASS, Bulma and Adobe Photoshop.</p>
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
          <p>As a team of two, we created a  <strong style={{ color: '#FFF' }}><em>full-stack web and mobile CRUD app</em></strong> to help users contribute to sustainable fashion. For the backend, we used  <strong style={{ color: '#FFF' }}><em>Python Django, Django REST Framework and PostgreSQL</em></strong>. We populated two databases to form a ‘clothes swap’ functionality, based on the provision of user registration, and a brand sustainability ranking. For the frontend, we used  <strong style={{ color: '#FFF' }}><em>React and JavaScript, styled using SASS.</em></strong> Mobile Optimized. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>


}

export default CarouselDisplay