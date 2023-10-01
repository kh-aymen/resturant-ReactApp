import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
  const { title, price, tags } = props
  return (
    <>
      <div className="app__menuitem">
      
        <div className="app__menuitem_head">
          <div className="app__menuitem_name">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
          </div>
          <div className='app__menuitem_dash'/>
          <div className="app__menuitem_price">
            <p className="p__cormorant">{price}</p>
          </div>
        </div>

        <div className="app_menuitem_sub">
          <p className="o__opensans" style={{color:'#AAA'}}>{tags}</p>
        </div>

      </div>
    </>
  )
}

export default MenuItem