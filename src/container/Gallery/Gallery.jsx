import React from 'react'
import './Gallery.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const imagesConst = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null)

  const scrollFunc = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <>
      <div className="app__gallery flex__center">
        <div className="app__gallery_content">
          <SubHeading title='Instgram' />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur rerum non perferendis, consequatur repudiandae sequi magni natus! Ipsam!
          </p>
          <button type='button' className='custom__button'>View More</button>
        </div>

        <div className="app__gallery_images">
          <div className="app__gallery_images_container" ref={scrollRef}>
            {imagesConst.map((image, index) => {
              return (
                <>
                  <div className="app__gallery_images_card flex__center" key={`gallery_image_${index + 1}`} >
                    <img src={image} alt='gallery'  />
                    <BsInstagram className='gallery__image_icon' />
                  </div>
                </>
              )
            })}
          </div>
          
          <div className="app__gallery_images_arrows">
            <BsArrowLeftShort className='gallery__aeeows' onClick={() => scrollFunc('left')} />
            <BsArrowRightShort className='gallery__aeeows' onClick={() => scrollFunc('right')} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Gallery