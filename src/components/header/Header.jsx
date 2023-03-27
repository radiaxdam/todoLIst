import React from 'react'
import logo from './../../../images/logo.png'
import style from './Header.module.css'

import {AiOutlineSearch} from 'react-icons/ai'
import {BsHeadphones} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'




const Header = () => {
  return (
    <div className={style.header} >
      
      <div className={style.leftContainer}>
            <div className={style.logoContainer}>
              <img src={logo} alt="logo"  className={style.logo} />
            </div>
            <h1 className={`${style.heading} ${style.head} ${style.vB}`}>Projects</h1>
            <h1 className={`${style.fadeHeading} ${style.head} ${style.vB}`}>Templates</h1>
      </div>
      <div className={style.rightContainer}>
            <span className={style.newButton} >Start a new Project</span>
            <div className={style.options}>
            <AiOutlineSearch className={style.icon}/>
            <BsHeadphones className={style.icon }/>
            <IoMdNotificationsOutline className={style.icon}/>
            </div>
      </div>

    </div>
  )
}

export default Header