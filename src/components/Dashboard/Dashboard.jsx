import React,{useState,useEffect} from 'react'
import style from './Dashboard.module.css'
import DashboardHeader from './DashboardHeader'
import Workspace from './Workspace'


const Dashboard = () => {


  const [workSpaceData,setWorkSpaceData] = useState({});

  useEffect(()=>{
      if(localStorage.getItem('data')==null){
        localStorage.setItem('data', JSON.stringify({firstWork:{workName:"do arrays"},secondWork:{workName:"do objects"}}));
      }
      setWorkSpaceData(JSON.parse(localStorage.getItem('data')));  
     
},[]);

  

  return (
    <div className={style.dashboard} >
            <DashboardHeader  data={workSpaceData} setData={setWorkSpaceData} />
            <Workspace data={workSpaceData} setData={setWorkSpaceData} />
            
    </div>
  )
}

export default Dashboard