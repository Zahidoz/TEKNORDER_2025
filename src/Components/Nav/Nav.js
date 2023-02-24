import React from 'react';
import './Nav.scss'
import { BiSearch } from 'react-icons/bi';


const Nav = ({search,setSearch}) => {


    window.addEventListener("scroll",function(){
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("surus",this.window.scrollY>0)
    })
    const afterCLick=()=>{
        var inpt = document.querySelector('.inpt')
        inpt.classList.toggle("uzan")
    }
    
    return (
    <nav> 
        <div className='nav-logo'>
            <img src='footer-logo.png'></img>
        </div>
        <div className='nav-links'>
            <ul>
                <li><a>Məhsullar</a></li>
                <span className='nav-line'></span>
                <li><a>Haqqımızda</a></li>
                <span className='nav-line'></span>
                <li><a>Əlaqə</a></li>
            </ul>
        </div>
        <div className='nav-input'>
            <div className='inpt' >
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Axtar . .'></input>
                <BiSearch id='nav-lupa' onClick={afterCLick}/>
            </div>
        </div> 
    </nav>
  )
}

export default Nav