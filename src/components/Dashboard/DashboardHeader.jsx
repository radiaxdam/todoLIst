import React , {useState,useEffect} from 'react'
import style from './DashboardHeader.module.css';
import {TbGridDots} from 'react-icons/tb';
import {FaBars} from 'react-icons/fa';
import RightBarOptions from './RightBarOption';
import uniqid from 'uniqid'
import produce from 'immer'



const DashboardHeader = (props) => {

  const handleAdd = (e)=>{
    let work = prompt("Enter Work", "eg. Learn Arrays");
    if (work != null) {
        localStorage.setItem('data',JSON.stringify(
          produce(props.data,draft=>{
            draft[uniqid.process()] = {
              workName:work,
              time:new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 

            }
          })
        ));
        props.setData(JSON.parse(localStorage.getItem('data')));
    }

    e.stopPropagation();
  }
  

  return (
  <div className={style.dashboardHeader}>
  <div className={style.leftBar}>
    <TbGridDots  className={style.icon} />
    <FaBars className={style.icon}  />

  </div>
  <div className={style.rightBar}>
  <button className={style.addButton} onClick={(e)=>{
    handleAdd(e);
  }} >Add Work </button>
  <RightBarOptions/>
  <RightBarOptions/>
  <RightBarOptions/>
  <RightBarOptions/>
  </div>

  </div>

  )
}

export default DashboardHeader;