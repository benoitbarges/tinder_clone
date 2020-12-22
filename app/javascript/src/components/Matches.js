import React from 'react'
import { useSelector } from 'react-redux'

export default function Matches() {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <div className='matches-grid'>
      {currentUser.matches.map(({ match_with }) => (
        <div className='match-card' key={match_with.id}>
          {match_with.first_name}
        </div>
      ))}
    </div>
  )
}
