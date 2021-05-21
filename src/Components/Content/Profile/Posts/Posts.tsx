import React from 'react'
import { Post } from './Post/Post'
import { generateKey } from '../../../../utilities/keyCreator'
import { PostsPropsType } from './PostsContainer'
import { PostForm } from './PostForm'
import s from './Posts.module.css'

export const Posts = (props: PostsPropsType) => {
  
  return (
    <div className={s.wrapper}>
      <h1>My Posts</h1>
      <PostForm addPost={props.addPost}/>
      
      {props.posts.map(v => (
        <Post key={generateKey(v.id)}
              id={v.id}
              name={v.name}
              message={v.message}
              dislikes={v.dislikes}
              likes={v.likes}
        />))}
    
    </div>
  )
}