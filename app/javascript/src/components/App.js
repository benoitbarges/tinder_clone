import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'

export default function App () {

  const dispatch = useDispatch()

  const store = useSelector(store => store)
  console.log(store)

  React.useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  return (
   <div>
     <h1>React</h1>
   </div>
  )
}
