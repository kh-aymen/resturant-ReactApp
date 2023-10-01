import React from 'react'
import './FooterOverlay.css'
import { images } from '../../constants'
import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi'
const FooterOverlay = () => {
  return (
    <>
      <div className="app__FooterOverlay">
        <div className="app__FooterOverlay_grid">
          <div class="div1 div">
            <h1 className="headtext__cormorant">Contact Us</h1>
            <p>Alegrai, batna, kechida</p>
            <p>+213675024524</p>
            <p>+213556573881</p>
            <p>khalfi.aymen2021@gmail.com</p>
          </div>
          <div class="div2">
            <h1 className="headtext__cormorant">GERICHT</h1>
            <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={images.spoon} alt="spoon" />
            <div className="div2__contactIcons">
              <a
                href="https://www.facebook.com/profile.php?id=100090873648467"
                target='_blank'
                rel="noreferrer noopener"
              ><FiFacebook fontSize={32} color='#fff' /></a>
              <a
                href="https://github.com/DIZAD99"
                target='_blank'
                rel="noreferrer noopener"
              ><FiGithub fontSize={32} color='#fff' /></a>
              <a
                href="https://www.instagram.com/a_itachi____/"
                target='_blank'
                rel="noreferrer noopener"
              ><FiInstagram fontSize={32} color='#fff' /></a>
            </div>
          </div>
          <div class="div3 div">
            <h1 className="headtext__cormorant">Working Hours</h1>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
        </div>
        <div className="app__FooterOverlay_rights">
          <p className="p__opensans">2023 Khalfi Aymen. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default FooterOverlay