import React from 'react'
import './AboutUs.css'
import { images } from '../../constants'
const AboutUs = () => {
  return (
    <>
      <div className="app__aboutus app__bg flex__center section__padding" id='about'>
        <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt={'g letter'} />
        </div>0

        <div className="app__abouts-content flex__center">
          <div className='app__aboutus-content_abouts'>
            <h1 className="headtext__cormorant">About us</h1>
            <img src={images.spoon} alt={"about-spoon"} className='spoon__img' />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto repudiandae consequuntur ducimus. Ea esse dicta accusantium molestiae? Nihil, perferendis beatae doloribus atque fugiat impedit.
            </p>
            <button type='button' className='custom__button'>Know More</button>
          </div>

          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt={'image_knife'} />
          </div>

          <div className='app__aboutus-content_history'>
            <h1 className="headtext__cormorant">Our history</h1>
            <img src={images.spoon} alt={"about-spoon"} className='spoon__img' />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto repudiandae consequuntur ducimus. Ea esse dicta accusantium molestiae? Nihil, perferendis beatae doloribus atque fugiat impedit.
            </p>
            <button type='button' className='custom__button'>Know More</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutUs