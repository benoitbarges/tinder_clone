import React from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import { FaSearch, FaHeart } from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'


export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav id='navbar' className='d-flex justify-content-around align-items-center'>
      <NavLink exact to='/' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <FaSearch />
        <h6 className='mb-0 mt-2'>EXPLORE</h6>
      </NavLink>

      <NavLink
        to='/matches'
        isActive={() => ['/matches', '/profile/'].some(url => pathname.includes(url))}
        activeClassName='active-navlink'
        className=' navlink d-flex flex-column align-items-center'
        >
          <FaHeart />
          <h6 className='mb-0 mt-2'>MATCHES</h6>
      </NavLink>

      <NavLink to='/chat' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <BsChatFill />
        <h6 className='mb-0 mt-2'>CHAT</h6>
      </NavLink>

      <NavLink exact to='/profile' activeClassName='active-navlink' className=' navlink d-flex flex-column align-items-center'>
        <MdAccountCircle />
        <h6 className='mb-0 mt-2'>PROFILE</h6>
      </NavLink>
    </nav>
  )
}
