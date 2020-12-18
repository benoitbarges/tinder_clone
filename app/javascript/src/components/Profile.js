import React from 'react'
import { useSelector } from 'react-redux'
import { BiMap } from 'react-icons/bi'

export default function Profile() {
  const currentUser = useSelector(state => state.currentUser)

  const { infos, photos } = currentUser

  if (!currentUser) {
    return <h1>Loading...</h1>
  }

  return (
    <div id='profile'>
      <img
        src={photos[0]}
        alt={`${infos.first_name}'s photo`}
        className='profile-photo'
      />
      <div className='profile-infos'>
        <h3 className='text-center'>{infos.first_name}</h3>
        <p>{infos.age}</p>
        <ul>
          <li>
            <BiMap />
            <span>{infos.location}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
