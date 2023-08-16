import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';



const Navbar = () => {
    const[openLinks , setOpenLinks ] = useState(false)
    const toggleNavabr=()=>{
        setOpenLinks(!openLinks);
    }
  return (
    <div className="navbar">
      <div className="left-side" id={openLinks ? "open":"close"}>
        <img src= {Logo} />
            <div className="hiddenLinks">
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            </div>
      </div>
      <div className="right-side">
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <button onClick={toggleNavabr}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
