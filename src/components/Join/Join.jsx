import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_9ap3jms',
        'template_x11cij7',
        form.current,
        'Zvk6Ctzys8fPu7nUn'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='join' id='join-us'>
      <div className='join-left'>
        <hr />
        <div>
          <span>READY TO </span>
          <span className='stroke-text'>LEVEL UP</span>
        </div>
        <div>
          <span className='stroke-text'>YOUR BODY</span>
          <span>WITH ME?</span>
        </div>
      </div>
      <div className='join-right'>
        <form
          ref={form}
          action=''
          className='email-container'
          onSubmit={sendEmail}
        >
          <input
            type='email'
            name='user_email'
            placeholder='Enter your email'
          />
          <button className='btn join-btn'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
