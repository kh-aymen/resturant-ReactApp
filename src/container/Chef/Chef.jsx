import React from 'react'
import './Chef.css'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'

const Chef = () => {
  return (
    <>
      <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
          <SubHeading title={"Chef's Word"}></SubHeading>
          <h1 className="headtext__cormorant">What we Believe in</h1>

          <div className="app_chef_content">
            <div className="app__chef_content_quote">
              <img src={images.quote} alt="quote" />
              <p className="p__opensans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
              </p>
            </div>

            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sed natus aliquid, consequatur illo expedita nobis magni harum error nihil doloribus delectus, commodi aperiam doloremque.
            </p>
          </div>
          <div className="app__chef_sign">
            <p>Kevin Lou</p>
            <p className="p__opensans">
              Chef & Founder
            </p>
            <img src={images.sign} alt="sing" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chef