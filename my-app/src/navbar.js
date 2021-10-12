import React from 'react';
import './navbar.css';
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';



export default function Navbar() {
    return (
      <nav className="navbar">
        <ul>
            <li className='nav-link logo'>Send FREIGHT</li>
            <li className='nav-link logo'>
                <input type='text' className='search-box' placeholder='Search'></input>
                <FaSearch className='search-icon'/>

            </li>
        </ul>

        <ul>
            <li className='nav-link'>
            <Button variant="outlined" sx={{ mr : 3, color : '#fff', border : '1px solid #fff'}}>Request Quote</Button>
            <Button variant="contained" color='success' >Book Shipment</Button>
            </li>
        </ul>
      </nav>
    );
  }
  
  
  // export function Switch () {

  //   function Clicked (){
  //     // var switchWrap = document.getElementsByClassName('switch');
  //     var switchBtn = document.getElementsByClassName('switch-btn');
  
  //     switchBtn.style.background = 'red';
  //     // if(switchBtn.style.background == '#0746A7') {
  //     //   switchBtn.style.background = '#fff';
  
  //     // }else{
  //     //   switchBtn.style.background = 'initial';
  
  //     // }
  //   }
  
  //   return (
  //     <div className="switch">
  //       <div className="switch-btn" onClick={Clicked}></div>
  //     </div>
  //   )
  // }