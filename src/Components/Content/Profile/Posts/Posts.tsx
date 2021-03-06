import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './Posts.module.css'
import { Post } from './Post/Post'
import { PostType } from '../../../../redux/state'
import { generateKey } from '../../../../utilities/keyCreator'

type PostsPropsType = {
  posts: PostType[]
  message: string
  addPost: () => void
  changeText: (t: string) => void
}

export const Posts = ({posts,message,changeText,addPost}: PostsPropsType) => {

  let [error, setError] = useState<string>('')
  
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)  => {
    const value = e.currentTarget.value
    if (value) {
      setError('')
    }
    changeText(value)
  }
  const addPostHandler = () => {
    if (message) {
      addPost()
      changeText('')
    } else {
      setError('Required text')
    }
  }
  const onKeyPressHandler =(e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message) {
        addPost()
        changeText('')
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