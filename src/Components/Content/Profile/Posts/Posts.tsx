import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './Posts.module.css'
import { Post } from './Post/Post'
import { ActionsTypes, addPostAC, changeTextAC, PostType } from '../../../../redux/state'
import { generateKey } from '../../../../utilities/keyCreator'

type PostsPropsType = {
  posts: PostType[]
  message: string
  dispatch: (action: ActionsTypes) => void
}

export const Posts = ({posts,message,dispatch}: PostsPropsType) => {

  let [error, setError] = useState<string>('')
  
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)  => {
    const value = e.currentTarget.value
    if (value) {
      setError('')
    }
    dispatch(changeTextAC(value))
  }
  const addPostHandler = () => {
    if (message) {
      dispatch(addPostAC())
      dispatch(changeTextAC(''))
    } else {
      setError('Required text')
    }
  }
  const onKeyPressHandler =(e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message) {
        dispatch(addPostAC())
        dispatch(changeTextAC(''))
      } else {
        setError('Required text')
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>My Posts</h1>
      <div>
        <textarea
          value={message}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={styles.textarea}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <div>
        <button
          className={styles.btn}
          onClick={addPostHandler}
        >
          Add Post
        </button>
      </div>
      {posts.map(v => (
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