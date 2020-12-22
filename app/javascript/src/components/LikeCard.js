import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createLike, createDislike } from '../actions/currentUser'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

export default function LikeCard() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const currentUser = useSelector(state => state.currentUser)

  const [unliked, setUnliked] = React.useState(null)
  const [firstUserToLike, setFirstUserToLike] = React.useState(null)

  console.log('unliked >>>>', unliked)
  console.log('firstUserToLike >>>>', firstUserToLike)

  const { given_likes_to, given_dislikes_to } = currentUser

  React.useEffect(() => {
    if (Object.keys(users).length !== 0) {
      const unliked = Object.keys(users).map(id => parseInt(id))
      .filter(id => !given_likes_to.includes(id))
      .filter(id => !given_dislikes_to.includes(id))
      .filter(id => id !== currentUser.id)

      setUnliked(unliked)
      setFirstUserToLike(users[unliked[0]])
    }
  }, [users, currentUser])

  const handleLike = () => {
    dispatch(createLike(currentUser, unliked[0]))
  }

  const handleDislike = () => {
    dispatch(createDislike(currentUser, unliked[0]))
  }

  if (unliked && unliked.length === 0) {
    return <div>No more person to like</div>
  }

  if (!unliked || !firstUserToLike ) {
    return <div>loading</div>
  }

  return (
    <div className='like-card'>
      <img
        src={firstUserToLike.photos[0]}
        alt={`${firstUserToLike.first_name}'s photo`}
        className='like-card-photo'
      />
      <div className='infos'>
        <h3 className='name mt-2'>{firstUserToLike.first_name}</h3>
        <p className='description'>{firstUserToLike.description}</p>
      </div>

      <div className='buttons'>
        <button
          onClick={handleLike}
          className='like-card-btn mr-2'
        >
          <FaHeart style={{color: '#B643B2', fontSize: '22px'}}/>
        </button>
        <button
          onClick={handleDislike}
          className='like-card-btn'
        >
          <CgClose style={{color: '#363636', fontSize: '32px'}} />
        </button>
      </div>
    </div>
  )
}
