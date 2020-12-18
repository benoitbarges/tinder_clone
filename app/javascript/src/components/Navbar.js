import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaHeart } from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'


export default function Navbar() {
  return (
    <nav id='navbar' className='d-flex justify-content-around align-items-center'>
      <NavLink to='/explore' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <FaSearch />
        EXPLORE
      </NavLink>

      <NavLink to='/matches' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <FaHeart />
        MATCHES
      </NavLink>

      <NavLink to='/chat' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <BsChatFill />
        CHAT
      </NavLink>

      <NavLink to='/profile' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <MdAccountCircle />
        PROFILE
      </NavLink>
    </nav>
  )
}
