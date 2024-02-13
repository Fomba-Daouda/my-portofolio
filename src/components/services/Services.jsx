import React from 'react'
import './services.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Services() {
  return (
    <section id='services'>
      <h2>Compétences Générales</h2>
      
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Langues</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
               <h6>Anglais: Intermédiaire</h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
              <h6>Français : Courant</h6>
            </li>
            
          </ul>
        </article>
        {/* End of ui/ux */}
        <article className='service'>
          <div className='service_head'>
            <h3>Soft Skills</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>

               <h6>Rigoureux,  Capacité d’adaptation, </h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
              <h6>Esprit d’équipe , Force de proposition, </h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
              <h6>Autonome, Flexible.</h6>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}
        <article className='service'>
          <div className='service_head'>
            <h3>Loisirs</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
               <h6> Veille technologique</h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
               <h6>Sports </h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
               <h6>Films</h6>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
               <h6>Coiffure</h6>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}
      </div>
    </section>
  )
}
