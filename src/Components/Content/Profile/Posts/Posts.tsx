import React from 'react'
import { Post } from './Post/Post'
import { generateKey } from '../../../../utilities/keyCreator'
import { PostsPropsType } from './PostsContainer'
import { PostDataType, PostReduxForm } from './PostForm'
import s from './Posts.module.css'
import { AddPostForm } from './Post/PostFormWthFormik'
import { addPostAC } from '../../../../redux/reducers/profile-reducer'

export const Posts = (props: PostsPropsType) => {
  const addPost = (values: PostDataType) => {
    props.addPost(values.post)
  }
  const addPostOnKeyPress = (values: PostDataType) => {
    props.addPost(values.post)
  }
  return (
    <div className={s.wrapper}>
      <h1>My Posts</h1>
      <PostReduxForm onSubmit={addPost} />
      {/*//component with formik*/}
      {/*<AddPostForm/>*/}
      {props.profilePage.posts.map(v => (
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