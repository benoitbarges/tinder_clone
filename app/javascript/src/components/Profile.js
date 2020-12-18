import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const user = useSelector(state => state.currentUser)
  console.log(user)

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>{user.first_name}</h1>
    </div>
  )
}
