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
  const [value, setValue] = useState<string>('')
  
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)  => {
    const currentValue = e.currentTarget.value
    if (currentValue) {
      setError('')
      changeText(currentValue)
      setValue(currentValue)
    }
    
  }
  const addPostHandler = () => {
    if (message) {
      addPost()
      changeText('')
      setValue('')
    } else {
      setError('Required text')
    }
  }
  const onKeyPressHandler =(e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      addPost()
      setValue('')
      changeText(value)
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