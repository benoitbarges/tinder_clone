import React from 'react'
import { useSelector } from 'react-redux'
import { BiMap } from 'react-icons/bi'

export default function Profile() {
  const currentUser = useSelector(state => state.currentUser)

  const { first_name, photos, age, location } = currentUser

  if (!currentUser) {
    return <h1>Loading...</h1>
  }

  return (
    <div id='profile'>
      <img
        src={photos[0]}
        alt={`${first_name}'s photo`}
        className='profile-photo'
      />
      <div className='profile-infos'>
        <h3 className='text-center'>{first_name}</h3>
        <p>{age}</p>
        <ul>
          <li>
            <BiMap />
            <span>{location}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
