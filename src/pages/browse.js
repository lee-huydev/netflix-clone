import React, { useContext}  from 'react'
import { RefeshContext } from '../contexts/firebase'
import {getAuth,signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
const Browse = () => {
  const {refesh, setRefesh} = useContext(RefeshContext) 
  const auth = getAuth()
  const handleSignOut = () => {
    signOut(auth)
      .then(()=> {
        console.log('Success fully')
        localStorage.removeItem('authUser')
        setRefesh(!refesh)
      })
      .catch((error) => console.log(error.code))
  }
  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default Browse