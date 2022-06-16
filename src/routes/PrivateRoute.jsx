import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state=>state.Auth.auth)
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute