import React from 'react'
import { useSelector } from 'react-redux'

export default function App () {

  const store = useSelector(store => store)
  console.log(store)

  return (
   <div>
     <h1>React</h1>
   </div>
  )
}
