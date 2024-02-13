import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portofolio from './components/portofolio/Portofolio'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experiences></Experiences>
      <Services></Services>
      <Portofolio></Portofolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}
