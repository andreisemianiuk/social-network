import React, { useState } from 'react'
import styles from './Posts.module.css'
import { Post } from './Post/Post'

export const Posts = () => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {

  }

  return (
    <div className={styles.wrapper}>
      <h1>My Posts</h1>
      <div>
        <textarea className={styles.textarea} value={value} onChange={() => setValue(value)}/>
      </div>
      <div>
        <button type={'submit'} className={styles.btn} onClick={handleSubmit}>Add Post</button>
      </div>
      <Post message={'Hello'} dislikes={1} likes={9}/>
      <Post message={'Hi'} dislikes={3} likes={20}/>
    </div>
  )
}