import React from 'react'
import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
const Footer = () => {
  return (
    <>
        <div className="app__footer section__padding app__bg">
          <Newsletter/>
          <FooterOverlay/>
        </div>
    </>
  )
}

export default Footer