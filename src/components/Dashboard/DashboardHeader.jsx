import React from 'react'
import style from './DashboardHeader.module.css';
import {TbGridDots} from 'react-icons/tb';
import {FaBars} from 'react-icons/fa';
import RightBarOptions from './RightBarOption';



const DashboardHeader = () => {
  return (
  <div className={style.dashboardHeader}>
  <div className={style.leftBar}>
    <TbGridDots  className={style.icon} />
    <FaBars className={style.icon}  />

  </div>
  <div className={style.rightBar}>
  <RightBarOptions/>
  <RightBarOptions/>
  <RightBarOptions/>
  <RightBarOptions/>
  </div>

  </div>

  )
}

export default DashboardHeader