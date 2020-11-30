import React from 'react';
import './App.css';
import { client } from './client'
import Blogposts from './components/Blog/Blogposts'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/Pages/Gallery';
import AboutMe from './components/Pages/AboutMe';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
  
    </>
  );
}

export default App;