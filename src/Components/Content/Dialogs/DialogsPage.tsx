import React from 'react'

type DialogsPageType = {
  id: number
  message: string
  likesCount: number
  date: string
}

export const DialogsPage: React.FC<DialogsPageType> = (props) => {
  return (
    <div>
      <h3>{props.id}</h3>
      <p>{props.message}</p>
      <div>Likes: {props.likesCount}</div>
      <div>{props.date}</div>
    </div>
  )
}