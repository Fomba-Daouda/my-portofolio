import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <ul className='permalinks'>
        <li>
          <a href='#'>Acceuil</a>
        </li>
        <li>
          <a href='#about'>A propos</a>
        </li>
        <li>
          <a href='#experiences'>Compétences</a>
        </li>
        <li>
          <a href='#services'>Langues&SoftSkills</a>
        </li>
        <li>
          <a href='#portofolio'>Formations</a>
        </li>
        <li>
          <a href='#testimonial'>Expériences</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_copyright'>
        <small>&copy; @daoudafomba (FOMBA Daouda). All rights reserved.</small>
      </div>
    </footer>
  )
}
