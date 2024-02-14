import React from 'react'
import './portofolio.css'
import ME from '../../assets/univ1.png'
import ME2 from '../../assets/univ2.png'
import ME3 from '../../assets/univ3.png'
import { useState } from 'react'
const data = [
  {
    id: 1,
    image: ME,
    title: 'Master Apprentissage Machine pour la Science des données',
    univ : "Université Paris Cité",
    description : "Apprentissage non supervisé et supervisé, Analyse des données, Big Data, Probabilité et Statistique, NLP, Deep learning, Série chronologique, Modèle de mélange",
    github: '',
    demo: 'https://u-paris.fr',
  },
  {
    id: 2,
    image: ME3,
    title: "Diplôme d'ingénieur d'état en développement web et mobile ",
    univ : "Université Hassan 1er",
    description : "Conception des logiciels, programmation web, programmation orientée objet, Gestion des bases de données.",
    github: '',
    demo: 'http://www.fsts.ac.ma/',
  },
  {
    id: 3,
    image: ME2,
    title: "Diplôme d'étude universitaire générale en mathématiques appliqués ",
    univ : "Université Cadi Ayyad",
    description : "Analyse, Algèbre, Mécanique du solide, Algorithmique ",
    github: 'le lien Git',
    demo: 'https://www.uca.ma/fssm',
  },
]

export default function Portofolio() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='portofolio'>
      <h2>Formations</h2>
     

      <div className='container portofolio_container'>
        {data.map(({ id, image, title,univ,description, github, demo }) => {
          return (
            <article key={id} className='portofolio_item'>
              <div className='portofolio_item-image'>
                <img src={image} alt='project' />
              </div>
              <h3>{title}</h3>
              <h4 className='univ'>{univ}</h4>
              <h5>{description}</h5>
              <div className='portofolio_item-cta'>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Voir Site Web
                </a>
              </div>
            </article>
          )
        })}

       
      </div>
      <a href='#testimonial'
              onClick={() => setActiveNav('#testimonial')}
              className={activeNav === '#testimonial' ? 'active btn' : 'btn'}
           >
                 Page Suivante
       </a>
    </section>
  )
}
