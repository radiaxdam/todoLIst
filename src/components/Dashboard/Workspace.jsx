import React, { useState ,useEffect } from 'react'
import TodoItem from './TodoItem'
import style from './Workspace.module.css'




const Workspace = (props) => {


  return (

    <div className={style.workspace}>

     {
      Object.keys(props.data).map((item)=>{
        return <TodoItem key={item} id={item}  data = {props.data} setData = {props.setData} workName={props.data[item].workName}  />
      })
      // console.log(Object.keys(props.data))
     }

    </div>

        )
}

export default Workspace