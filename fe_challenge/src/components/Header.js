import React, {useState} from 'react'
import stylesHeader from '../styles/Header.module.css'
import {BrowserView, MobileView} from 'react-device-detect'

export default function Header() {
  const [dropDownMenu, setDisplay] = useState(false)
  return (
    <>
      <BrowserView>
        <div className={stylesHeader['header']}>
          <img src="https://i.ibb.co/vYx1R00/logo.png" className={stylesHeader['logo']} alt=""></img>
          <div className={stylesHeader['menu']}>
              <div  className={stylesHeader['activeText']}>Explore creators</div>
              <div className={stylesHeader['notActiveText']}>My projects</div>
          </div>
          <img src="https://i.ibb.co/h2hqfZR/profile.png" 
          className={stylesHeader['user']} alt=""
          onClick={() => setDisplay(true)}
          onMouseOut={() => setDisplay(false)}></img>
          {dropDownMenu && <div></div>}
        </div>
      </BrowserView>
      <MobileView>
        <div className={stylesHeader['header']}>
          <img src="https://i.ibb.co/vYx1R00/logo.png" className={stylesHeader['logo']} alt=""></img>
        </div>
      </MobileView>
    </>
  )
}