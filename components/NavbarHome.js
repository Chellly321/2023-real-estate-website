import React, { useRef, useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// styling and icons
import './NavbarHome.css'
import Logo from '../assets/5.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';



export default function NavbarHome() {
    const [toggle, setToggle] = useState(false);
    const navRef = useRef()
    const location = useLocation()

    useEffect(() => {
        if(toggle){
            handleToggle()
        }

    }, [location]);

    const handleToggle = () => {
        setToggle(!toggle)
        navRef.current.classList.toggle('responsive-nav')
    }

  return (
    <div className='navbar'>
        <nav>
        <Link className='logo-container' exact to='/'>
            <img src={Logo} alt='logo anra caribbean'/>
            <span>AnRa CARIBBEAN</span>
        </Link>

            <div className="route-container" ref={navRef}>
                <NavLink exact to='/home'>
                    Home
                </NavLink>

                <NavLink to='/listings'>
                    Listings
                </NavLink>

                <NavLink to='/sxmedge'>
                    SXM Edge
                </NavLink>

                <NavLink to='/contact'>
                    Contact
                </NavLink>

                <NavLink to='/aboutus'>
                    About us
                </NavLink>
                <div className="menu-icons">
                    {
                        (toggle === false) ? <button className='nav-btn'> <MenuOpenIcon onClick={handleToggle}/> </button> :
                        <button className='nav-btn close-btn'> <CloseIcon onClick={handleToggle}/> </button>
                    }
                </div>
            </div>
            <div className="menu-icons">
                {
                    (toggle === false) ? <button className='nav-btn'> <MenuOpenIcon onClick={handleToggle}/> </button> :
                    <button className='nav-btn close-btn'> <CloseIcon onClick={handleToggle}/> </button>
                }
            </div>
            
         

        </nav>
        
    </div>
  )
}