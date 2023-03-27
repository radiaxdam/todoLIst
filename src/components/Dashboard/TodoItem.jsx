import React,{useRef,useEffect} from 'react'
import style from './TodoItem.module.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {MdDriveFileRenameOutline,MdOutlineKeyboardBackspace} from 'react-icons/md'
import produce from 'immer';

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


    const handleDelete = (e)=>{
      let conf = confirm("click to delete")
      if (conf) {
          localStorage.setItem('data',JSON.stringify(
            produce(props.data,draft=>{
                  
                delete  draft[props.id];
            })
          ));
          props.setData(JSON.parse(localStorage.getItem('data')));
            console.log("delete run hogya");

      toggleOptions(e);
      e.stopPropagation();

      

    }}

    const handleRename=(e)=>{
      let rename = prompt("Rename", props.workName);
    
      if (rename != null) {
          localStorage.setItem('data',JSON.stringify(
            produce(props.data,draft=>{
                  
                  draft[props.id]['workName'] = rename
            })
          ));
          props.setData(JSON.parse(localStorage.getItem('data')));
      

      toggleOptions(e);
      e.stopPropagation();
    }
  }
  return (
    <div className={style.item}  >
       <h3 className={style.title}>
            {props.workName}
       </h3>
        
        <div className={style.itemFooter}>
            <span>2 days ago </span>
            <BiDotsHorizontalRounded onClick={toggleOptions}  className={style.itemFooterIcon}/>
        </div>

        <div className={style.options} onClick={(e)=>toggleOptions(e)}  ref={optionRef}  >
            <button onClick={(e)=>{
              handleRename(e);
            }} >Rename <MdDriveFileRenameOutline/> </button>
            <button>Back <MdOutlineKeyboardBackspace/> </button>
            <button onClick = {(e)=>{
              handleDelete(e);
            }} >Delete <AiFillDelete/> </button>
        </div>


    </div>
  )
}

export default TodoItem