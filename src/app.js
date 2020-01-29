import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, useRouter, WithRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'bulma'
import '../src/style.scss'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

const App = () => {

	
  return <BrowserRouter>
    <Navbar />
    <ParallaxProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/technologies" component={Technologies} /> 
      </Switch>
    </ParallaxProvider>
  </BrowserRouter>
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)