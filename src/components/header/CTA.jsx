import React from 'react'
import CV from '../../assets/INGENIEUR_DATA.pdf'
import { useState } from 'react'
export default function () {
  const [activeNav, setActiveNav] = useState('#')
  return (

    <div className='cta'>
      <a href={CV} download className='btn'>
        CV
      </a>
      <a href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active btn' : 'btn'}

        >
        Page Suivante
      </a>
    </div>
  )
}
