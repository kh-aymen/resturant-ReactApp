import React from 'react'
import './Laurels.css'
import { images, data } from '../../constants'
import { SubHeading } from '../../components'

const AwardCard = (props) => {
  const { award } = props
  const { imgUrl, title, subtitle } = award
  return (
    <>
      <div className="app__laurels_awrads_card">
        <img src={imgUrl} alt="award" />
        <div className="app_laurels_awards_card_content">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
          <p className="p__cormorant">{subtitle}</p>
        </div>
      </div>
    </>
  )
}


function Laurels() {
  return (
    <>
      <div className="app__bg app__wrapper section__padding" id="awards">

        <div className="app__wrapper_info">
          <SubHeading title='Awrads & recognition' />
          <h1 className="headtext__cormorant">Our Lourels</h1>
          <div className="app__laurels_awrads">
            {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
          </div>
        </div>

        <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels" />
        </div>

      </div>
    </>
  )
}

export default Laurels