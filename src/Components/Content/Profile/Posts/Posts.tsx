import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './Posts.module.css'
import { Post } from './Post/Post'
import { generateKey } from '../../../../utilities/keyCreator'
import { PostsPropsType } from './PostsContainer'
import { PostReduxForm } from './PostForm'

export const Posts = (props: PostsPropsType) => {
  let [error, setError] = useState<string>('')
  
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value
    if (value) {
      setError('')
    }
    props.onChange(value)
  }
  const addPostHandler = () => {
    if (props.profilePage.newPostText) {
      props.addPost()
      props.onChange('')
    } else {
      setError('Required text')
    }
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (props.profilePage.newPostText) {
        props.addPost()
        props.onChange('')
      } else {
        setError('Required text')
      }
    }
  }
  
  return (
    <div className={styles.wrapper}>
      <h1>My Posts</h1>
      {/*<div>*/}
      {/*  <textarea*/}
      {/*    value={props.profilePage.newPostText}*/}
      {/*    onChange={onChangeHandler}*/}
      {/*    onKeyPress={onKeyPressHandler}*/}
      {/*    className={styles.textarea}*/}
      {/*  />*/}
      {/*  {error && <div className={styles.error}>{error}</div>}*/}
      {/*</div>*/}
      <PostReduxForm/>
      {/*<div>*/}
      {/*  <button*/}
      {/*    className={styles.btn}*/}
      {/*    onClick={addPostHandler}*/}
      {/*  >*/}
      {/*    Add Post*/}
      {/*  </button>*/}
      {/*</div>*/}
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