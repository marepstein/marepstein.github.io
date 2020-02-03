import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, useRouter, WithRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'bulma'
import '../src/style.scss'
import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

const App = () => {

	
  return <HashRouter>
    <Navbar />
    <ParallaxProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/technologies" component={Technologies} /> 
        <Route exact path="/contact" component={Contact} /> 
      </Switch>
    </ParallaxProvider>
  </HashRouter>
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)