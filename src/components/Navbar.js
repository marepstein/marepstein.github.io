import React from 'react'
import { Link, withRouter } from 'react-router-dom'



const Navbar = () => {


	const handleMenu = () => {
    const burger = document.querySelector('.burger')
    const menuList = document.querySelector('#' + burger.dataset.target)

    burger.classList.toggle('is-active')
		menuList.classList.toggle('is-active')
	}

  return <nav className="navbar is-black is-fixed-bottom" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">Home</Link>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navDrop" onClick={handleMenu}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <Link className="navbar-link is-arrowless" to='/about'>About</Link>
      </div>
      <div className="navbar-item">
        <Link className="navbar-link is-arrowless" to='/projects'>Projects</Link>
      </div>
      <div className="navbar-item">
        <Link className="navbar-link is-arrowless" to='/technologies'>Technologies</Link>
      </div>
      <div className="navbar-item">
        <Link className="navbar-link is-arrowless" to='/contact'>Contact</Link>
      </div>
    </div>
  </nav>

}

export default Navbar 