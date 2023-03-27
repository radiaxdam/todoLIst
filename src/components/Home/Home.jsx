import React from 'react'
import style from './Home.module.css';
import Header from '../header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
  return (
    <div className={style.home}>
      
      <Header className= {style.header}/>
        <Sidebar/>
        <Dashboard/>

      
    </div>

  )
}

export default Home