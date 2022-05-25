import React from 'react'
import Profiles from '../components/Profiles'
const SelectProfiles = ({user}) => {
  return (
    <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
            <Profiles.Item>
                <Profiles.Picture src={user.photoURL} alt ='user'/>
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.Item>
        </Profiles.List>
    </Profiles>
  )
}

export default SelectProfiles