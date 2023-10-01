import React from 'react'
import images from '../../constants/images'
const SubHeading = (props) => {

  const { title } = props
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant">{title}</p>
        <img src={images.spoon} alt={'spoon'} className='spoon_img' />
      </div>
    </>
  )
}

export default SubHeading