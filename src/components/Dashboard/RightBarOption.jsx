import React from 'react'
import style from './RightBarOption.module.css'
import {MdArrowDropDown} from "react-icons/md"


const RightBarOption = (props) => {
  return (
    <div className={style.optionContainer}>
      <span className={style.upperText} >Client</span>
    
      <select className={style.options}  >
              <option value="All Clients">All Clients</option>
              <option value="Users">Users</option>
        </select>

  
    </div>
  )
}

export default RightBarOption;