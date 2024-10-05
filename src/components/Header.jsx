// import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <>
    <div className='header-demo'>
    <ul>
        <a href="/"><li className='text-dec'>Home</li></a>
        <Link to="/addbook"><li>Add-Book</li></Link>
        <Link to='/newbook'><li>New-Book</li></Link>
        <a href="#demo"><li>All Books</li></a>
      </ul>

    </div>
      
    </>
  )
}

export default Header
