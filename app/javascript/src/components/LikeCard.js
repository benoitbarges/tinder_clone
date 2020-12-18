import React from 'react'
import { useSelector } from 'react-redux'

export default function LikeCard() {
  const users = useSelector(state => state.users)
  const currentUser = useSelector(state => state.currentUser)
  const [unliked, setUnliked] = React.useState(null)

  const { given_likes_to } = currentUser

  React.useEffect(() => {
    const unliked = users.filter(user => !given_likes_to.includes(user.infos.id))
      .filter(user => user.infos.id !== currentUser.infos.id)
    setUnliked(unliked)
  }, [users])

  if (!unliked || unliked.length === 0) {
    return <div></div>
  }

  return (
    <div className='like-card'>
      <img src={unliked[0].photos[0]} alt="yes" className='like-card-photo' />

    </div>
  )
}
