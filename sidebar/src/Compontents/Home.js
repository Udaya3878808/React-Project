import React from 'react'
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from '../Context/Context'

const Home = () => {
    const {openSidebar,openModal} = useGlobalContext()
    
  return (
   <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars/>
    </button>
    <button className="btn" onClick={openModal}>Show Model</button>
   </main>
  )
}

export default Home
