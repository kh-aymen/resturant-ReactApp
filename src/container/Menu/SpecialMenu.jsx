import React from 'react'
import './SpecialMenu.css'
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
const SpecialMenu = () => {
  return (
    <>
      <div className="app__specialMenu flex__center section__padding" id='menu'>
        <div className="app__specialMenu-title">
          <SubHeading title='Menu that fits you palatte'></SubHeading>
          <h1 className="headtext__cormorant">Today's special</h1>
        </div>

        <div className="app__specialMenu_menu">

          <div className="app__specialMenu_menu_wine flex__center">
            <p className="app__specialMenu_menu_heading">Wine & Beer</p>
            <div className="app__specialMenu_menu_items">
              {data.wines.map((wine, index) => {
                return (
                  <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}></MenuItem>
                )
              })}
            </div>
          </div>

          <div className="app__specialMenu_menu_img">
            <img src={images.menu} alt='menu_image' />
          </div>

          <div className="app__specialMenu_menu_cocktails flex__center">
            <p className="app__specialMenu_menu_heading">Cocktails</p>
            <div className="app__specialMenu_menu_items">
              {data.cocktails.map((cocktail, index) => {
                return (
                  <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}></MenuItem>
                  )
              })}
            </div>
          </div>

        </div>

        <div style={{ marginTop: '1rem' }}>
          <button type="button" className='custom__button'>View More</button>
        </div>
      </div>
    </>
  )
}

export default SpecialMenu