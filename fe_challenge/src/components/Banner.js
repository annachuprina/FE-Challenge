import React from 'react'
import stylesBanner from '../styles/Banner.module.css'
import {BrowserView} from 'react-device-detect'

export default function Banner() {
  return (
    <div className={stylesBanner['banner']}>
      <div className={stylesBanner['center']}>
        <div className={stylesBanner['mainText']}>Creative motion projects</div>
        <div className={stylesBanner['subText']}>Discover client work to pitch on.</div>
      </div>
      <BrowserView>
        <div className={stylesBanner['right']}>
          <div className={stylesBanner['author']}>Video by Harold Miles</div>
        </div>
      </BrowserView>
      
    </div>
    
    
  )
}

