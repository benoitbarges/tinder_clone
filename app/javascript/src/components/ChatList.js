import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ChatList() {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <div id='chatlist'>
      {currentUser.matches.map((match) => (
        <Link to={`/matches/${match.id}`} key={match.id} className='chat' >
          <img
            src={match.match_with.photo}
            alt={`${match.match_with.first_name}'s photo`}
            className='chat-avatar'
          />
          <div>
            <p>{match.match_with.first_name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
