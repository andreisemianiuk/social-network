import React from 'react'

type ProfilePageType = {
  title: string
}

export const ProfilePage: React.FC<ProfilePageType> = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}