import React from 'react'
import './testimonials.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'
// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    periode : "sept 2022 - sept 2023",
    poste : "Data Scientist ",
    entreprise: "Carrefour Supply Chain",
    missions: ["Extraction et analyse  des données pour la détection des ruptures des articles liées à la gestion des magasins","Définition des critères d'alerte d'un magasin comme étant en rupture pour un article donné","Application de critères d'alerte afin de détecter les ruptures","Réalisation de la correction des ruptures basée sur l'expérience métier avec l'outil Google Cloud Bigquery et Python","Utilisation des algorithmes de machine learning pour prédire la similarité  entre les magasins","Proposition d'une méthode de correction des ruptures basée sur les résultats de similarité obtenus","Réalisation d'un dashboard sur Looker Studio pour visualiser l'impact des corrections sur les ventes et aussi les magasins les plus impactés","Documentation méthodique des différentes étapes réalisées avec l'outil Confluence"],
    lieu : "Paris"
  },
  {
    periode : "mai 2022 - août 2022",
    poste : "Data Scientist",
    entreprise: "Centre CLILLAC-ARP (Université Paris Cité )",
    missions: ["Configuration et exploration d’un modèle de traduction des documents médicaux existant avant la COVID-19","Amélioration du modèle ( fine-tuning) afin de prédire correctement les termes liés à la COVID-19"],
    lieu : "Paris"
  },
  {
    periode : "mars 2021 – juillet2021",
    poste : "Data Analyst",
    entreprise: "Centre CLILLAC-ARP (Université Paris Cité )",
    missions: ["Réalisation d’une plateforme médicale de suivi des plaies des patients","Collecte des données sur les plaies des patients","Pronostic et prédiction de l’état des plaies","KPI pour mesurer le taux de satisfaction","Dashboard pour la visualisation des données"],
    lieu : "Rabat"
  }
]

export default function Testimonials() {
  return (
    <section id='testimonial'>
      
      <h2>Expériences Professionnelles</h2>

      <Swiper
        className='container testimonial_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ periode, entreprise, missions, poste,lieu }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                    <h2>{poste}</h2>
                    <h3 className='client_name' >{entreprise}</h3>
                    <h5 className='lieu'>{lieu}</h5>
                    <h5 className='lieu'>{periode}</h5>
              </div>
              <ul>
                {missions.map((mission, index) => (
                 <li key={index}>
                   <AiOutlineCheckCircle className='service_list-icon'></AiOutlineCheckCircle>
                   <h5>{mission}</h5>
                  </li>
                ))}
                </ul>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
