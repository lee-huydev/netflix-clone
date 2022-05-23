import React from 'react'
import {getAuth, signOut} from 'firebase/auth'
const Browse = () => {
  const auth = getAuth()
  const handleSignOut = () => {
    console.log(123)
    signOut(auth)
      .then(()=> {
        console.log('Success fully')
        localStorage.removeItem('authUser')
      })
      .catch((error) => console.log(error.code))
  }
  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default Browse