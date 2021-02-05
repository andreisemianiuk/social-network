import React from 'react'

type PostsPageType = {
  id: number
  message: string
}

export const PostsPage: React.FC<PostsPageType> = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{props.message}</p>
    </div>
  )
}