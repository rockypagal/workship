import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
const navigate = useNavigate()
const {isUser} = useSelector(store=>store.user)

useEffect(()=>{
  if(!isUser){
    navigate('/landing')
    return
  }
})

return (
    children
  )
}

export default ProtectedRoute