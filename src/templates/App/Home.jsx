import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../../components/Header/HeaderMain'
import SidebarMain from '../../components/Menu/SidebarMain'
import logo from "../../assets/images/logo.png";

import './App.css'

function Home() {

  return (
    <div className='container-fluid'>
      <HeaderMain title="" logo={logo} />
      <SidebarMain />
      <div>

      </div>
    </div>
  )
}

export default Home
