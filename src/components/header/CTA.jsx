import React from 'react'
import CV from '../../assets/INGENIEUR_DATA.pdf'
export default function () {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Contact
      </a>
    </div>
  )
}
