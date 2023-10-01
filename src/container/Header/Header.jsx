import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Header.css'
import images from '../../constants/images'


const Header = () => {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title='Chase the new flavour'></SubHeading>
          <h1 className="app__header-h1">The Key to Fine Dining</h1>
          <p className='p__cormorant' style={{ margin: '2rem 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis fuga deleniti beatae quidem. Iure reiciendis odit esse ut voluptates unde veniam perferendis incidunt impedit!
          </p>
          <button type='button' className='custom__button'>Explor Menu</button>
          
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt={'welcome img'} />
        </div>
      </div>
    </>
  )
}

export default Header
