import React from 'react'
import { useSelector } from 'react-redux'

export default function Matches() {
  const currentUser = useSelector(state => state.currentUser)
  const users = useSelector(state => state.users)

  return (
    <div className='matches-grid'>
      {currentUser.matches.map(({ match_with }) => (
        <div className='match-card' key={match_with.id}>
          <img
            src={match_with.photo}
            alt={`${match_with.first_name}'s photo`}
            className='match-photo'
          />
          {match_with.first_name}
        </div>
      ))}
    </div>
  )
}
