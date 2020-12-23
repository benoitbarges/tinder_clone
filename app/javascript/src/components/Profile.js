import React from 'react'
import { useSelector } from 'react-redux'
import { BiMap } from 'react-icons/bi'
import PropTypes from 'prop-types'
import { useParams, useRouteMatch } from 'react-router-dom'

export default function Profile({ buttonText }) {
  const currentUser = useSelector(state => state.currentUser)
  const users = useSelector(state => state.users)

  const { id } = useParams()
  const [user, setUser] = React.useState(null)

  const userMatched = currentUser.matches.find(match => match.match_with.id === parseInt(id))?.match_with

  React.useEffect(() => {
    setUser(id
      ? userMatched
      : currentUser)
  }, [id])

  if (!userMatched && user !== currentUser) {
    return <h1>It seems you didn't match this user !</h1>
  }

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <div id='profile'>
      <img
        src={user.photo}
        alt={`${user.first_name}'s photo`}
        className='profile-photo'
      />
      <div className='profile-infos'>
        <h3 className='text-center'>{user.first_name}</h3>
        <p>{user.age}</p>
        <ul>
          <li>
            <BiMap />
            <span>{user.location}</span>
          </li>
        </ul>
      </div>
      <button className='profile-btn'>{buttonText}</button>
    </div>
  )
}

Profile.propTypes = {
  buttonText: PropTypes.string.isRequired
}

Profile.defaultProps = {
  buttonText: 'Settings'
};
