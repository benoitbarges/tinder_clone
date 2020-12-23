import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'

export default function Matches() {
  const currentUser = useSelector(state => state.currentUser)
  const users = useSelector(state => state.users)

  const { path, url } = useRouteMatch()

  return (
    <div className='matches-grid'>
      {currentUser.matches.map(({ match_with }) => (
        <Link to={`/profile/${match_with.id}`} className='match-card' key={match_with.id}>
          <img
            src={match_with.photo}
            alt={`${match_with.first_name}'s photo`}
            className='match-photo'
          />
          <h5 className='name'>{match_with.first_name}</h5>
        </Link>
      ))}
    </div>
  )
}
