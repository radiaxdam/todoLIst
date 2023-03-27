import React,{useRef,useEffect} from 'react'
import style from './TodoItem.module.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {MdDriveFileRenameOutline,MdOutlineKeyboardBackspace} from 'react-icons/md'

const TodoItem = (props) => {
    
    const optionRef = useRef();
    let visibile  = false;

    const toggleOptions = (e)  =>{
  
        console.log("toggleoptions called")
      
      if(visibile){
        
        optionRef.current.style.visibility= "hidden";
        visibile = false;
      }
      else{
        optionRef.current.style.visibility  = "visible";
        visibile = true;
      }
      e.stopPropagation();

        
    }
    

  return (
    <div className={style.item}  >
       <h3 className={style.title}>
            first work first work
       </h3>
        
        <div className={style.itemFooter}>
            <span>2 days ago </span>
            <BiDotsHorizontalRounded onClick={toggleOptions}  className={style.itemFooterIcon}/>
        </div>

        <div className={style.options} onClick={(e)=>toggleOptions(e)}  ref={optionRef}  >
            <button>Rename <MdDriveFileRenameOutline/> </button>
            <button>Back <MdOutlineKeyboardBackspace/> </button>
            <button>Delete <AiFillDelete/> </button>
        </div>


    </div>
  )
}

export default TodoItem