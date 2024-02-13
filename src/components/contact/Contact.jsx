import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_57t470r',
      'template_d1bln6b',
      form.current,
      'gi3z8fQJ1R0H67SlZ'
    )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h2>Mes contacts</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'></AiOutlineMail>
            <h4>Email</h4>
            <h5>daoudafomba2016@gmail.com</h5>
            <a href='mailto:daoudafomba2016@gmail.com' target='_blanket'>
              Envoyez un message
            </a>
          </article>
          
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
            <h4>Phone</h4>
            <h5>+33 755464060</h5>
          </article>
          <article className='contact_option'>
           <AiFillLinkedin></AiFillLinkedin>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/daouda-fomba-71894a1a9/' target='_blank'>
                  Envoyez un message
            </a>  
          </article>
        </div>
       
      </div>
    </section>
  )
}

export default Contact
