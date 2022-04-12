import React from 'react'
import stylesFooter from '../styles/Footer.module.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserView} from 'react-device-detect'

export default function Footer() {
  return (
    <div className={stylesFooter['footer']}>
      <div className={stylesFooter['docs']}>
        <div>Terms & Privacy</div>
        <BrowserView><div>Contact</div></BrowserView>
      </div>
      <div className={stylesFooter['links']}>
        <div>© 2020 | SKILLDAR | All Rights Reserved</div>
        <div className={stylesFooter['icons']}>&#xf16d;</div>
        <div className={stylesFooter['icons']}>&#xf081;</div>
      </div>
    </div>
  )
}