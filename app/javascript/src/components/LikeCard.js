import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createLike } from '../actions/currentUser'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

export default function LikeCard() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const currentUser = useSelector(state => state.currentUser)
  const loading = useSelector(state => state.user === null)

  const { given_likes_to } = currentUser

  const unliked = Object.keys(users).map(id => parseInt(id))
    .filter(id => !given_likes_to.includes(id))
    .filter(id => id !== currentUser.id)

    console.log('unliked:', unliked)

  const firstUserToLike = users[unliked[0]]

  const handleClick = () => {
    dispatch(createLike(currentUser, unliked[0]))
  }

  if (loading || unliked.length === 0) {
    return <div></div>
  }

  return (
    <div className='like-card'>
      <img src={firstUserToLike.photos[0]} alt="yes" className='like-card-photo' />
      <button
        onClick={handleClick}
        className='like-card-btn'
      >
        <FaHeart />
      </button>
      <button className='like-card-btn'>
        <CgClose style={{color: 'black'}} />
      </button>
    </div>
  )
}
