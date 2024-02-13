import React from 'react'
import './header.css'
import CTA from './CTA'

export default function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Salut je suis</h5>
        <h1>FOMBA Daouda</h1>
        <h3 className='text-ight'>Ingénieur data scientist | data analyst </h3>
        <h6>
          Téléchargez mon CV pour avoir plus de détails sur mon parcours
          universitaire et expériences proffessionnelles !
        </h6>
        <CTA></CTA>
      </div>
    </header>
  )
}
