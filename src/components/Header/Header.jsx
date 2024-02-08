import React from 'react'
import './Header.css'
import Bars from '../../assets/bars.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div className='Header'>
        <img src={Logo} alt="" className='logo' />
        {(menuOpened===false && mobile===true)?(
         <div style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}
         onClick={()=>setMenuOpened(true)}
         ><img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/></div>
        ):(
          <ul className='header-menu'><li>
            <Link onClick={()=>setMenuOpened(false)} 
            activeClass='active' to='Header'
            span={true} smooth={true}>Home</Link>
          </li>
          <li>
            <Link onClick={()=>setMenuOpened(false)} 
            to='Programs'
            span={true} smooth={true}>About</Link>
          </li>
          <li>
            <Link onClick={()=>setMenuOpened(false)} 
            to='Reasons'
            span={true} smooth={true}>Why us</Link>
          </li>
          <li>
            <Link onClick={()=>setMenuOpened(false)} 
            to='plans'
            span={true} smooth={true}>Plans</Link>
          </li>
          
            <li><Link onClick={()=>setMenuOpened(false)} to='Testimonials'
            span={true} smooth={true}>Testimonials
            </Link></li>
        </ul>
        )
        }
        
    </div>

  )
}

export default Header