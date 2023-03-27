import React from 'react'


import {BsCurrencyDollar} from 'react-icons/bs';
import {BiHomeAlt2} from 'react-icons/bi';
import {RiDeleteBin7Line} from 'react-icons/ri';
import style from './Sidebar.module.css'



const Sidebar = () => {
  return (
    <div className={style.sidebar} >
      <div className={style.upperIcons}>
     
          <BsCurrencyDollar className={style.icon}/>
          <BiHomeAlt2 className={style.icon}/>
          <BsCurrencyDollar className={style.icon}/>
          <BiHomeAlt2 className={style.icon}/>
          <BsCurrencyDollar className={style.icon}/>
          <BiHomeAlt2 className={style.icon}/>
      </div>
      <div className={style.bottomIcons}>
          <RiDeleteBin7Line className={style.icon}/>
          <RiDeleteBin7Line className={style.icon}/>
      </div>
    </div>
  )
}

export default Sidebar