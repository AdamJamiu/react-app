import React from 'react';
import './navbar.css';
import { FaSearch } from "react-icons/fa";



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
                <button className='btn pry' type='button'>Request Quote</button>
                <button className='btn success' type='button'>Book Shipment</button>
            </li>
        </ul>
      </nav>
    );
  }
  
  
  