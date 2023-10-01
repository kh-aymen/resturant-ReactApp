import React from 'react'
import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'
import emailjs from 'emailjs-com'

const inputVal = document.getElementById('inputVal')

const handleClick = () => {
  setTimeout(() => { inputVal.value = '' }, 1000)
}

const Newsletter = () => {
  const form = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Restarunt-App', 'template_jvp2aip', form.current, '44xkIq2og-wcCtEzr')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <>
      <div className="app__newsletter">
        <div className="app__newletter_head">
          <SubHeading title='Newsletter' />
          <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
          <p className="p__opensans" style={{ color: 'gray' }}>And never miss lastes Updates!</p>
        </div>

        <div className="app__newsletter_input">
          <form ref={form} onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Email Address' id='inputVal' required />
            <button type="submit" className='custom__button' id='submitBtn' onClick={handleClick}>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter