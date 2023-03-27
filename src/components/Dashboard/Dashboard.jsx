import React from 'react'
import style from './Dashboard.module.css'
import DashboardHeader from './DashboardHeader'
import Workspace from './Workspace'


const Dashboard = () => {
  return (
    <div className={style.dashboard} >
            <DashboardHeader />
            <Workspace/>
            
    </div>
  )
}

export default Dashboard