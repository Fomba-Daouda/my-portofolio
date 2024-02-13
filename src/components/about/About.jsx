import React from 'react'
import './about.css'
import ME from '../../assets/linkdin_profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FaCarAlt } from "react-icons/fa"
import { MdTimer } from "react-icons/md"
const About = () => {
  return (
    <section id='about'>
      <h2>A propos de moi</h2>
     <div className='container  about_container'>
       <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About me' />
          </div>
        </div>
       
     

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'></FaAward>
              <h5>Experiences</h5>
              <small>2 années</small>
            </article>


            <article className='about_card'>
              <FaCarAlt className='about_icon'></FaCarAlt>
              <h5>Mobilité</h5>
              <small>France</small>
            </article>

            <article className='about_card'>
              <MdTimer className='about_icon'></MdTimer>
              <h5>Disponibilité</h5>
              <small>Immédiate</small>
            </article>
          </div>
          <p>
          Titulaire d'un diplôme de Master en Machine Learning, je viens de conclure avec succès mon expérience en alternance chez Carrefour Supply Chain. En tant qu'ingénieur Data Scientist / Analyst, j'ai contribué de manière significative à la gestion efficace des magasins.
          Au cours de mon alternance, j'ai développé des outils novateurs de détection et correction des ruptures, ciblant les défis liés à la mauvaise gestion des magasins. Ces solutions ont permis d'optimiser les processus opérationnels, réduisant ainsi les interruptions et améliorant la fluidité de la chaîne d'approvisionnement.
          Actuellement je suis à la recherche de nouvelles opportunités passionnantes dans le domaine de la data science, data analyse, je suis ouvert à des collaborations enrichissantes.
          </p>
          <p>
          N'hésitez pas à me contacter pour discuter de collaborations potentielles ou pour en savoir plus sur mon parcours professionnel.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
