import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { addPostAC } from '../../../../redux/reducers/profile-reducer'
import s from './Posts.module.css'

export type PostDataType = {
  post: string
}

const PostForm = (props: InjectedFormProps<PostDataType>) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="post"
          component="textarea"
          className={s.textarea}
        />
      </div>
      <button className={s.btn}>Add Post</button>
    </form>
  )
}

export const PostReduxForm = reduxForm<PostDataType>({
  form: 'post',
  // onSubmit: (values, dispatch) => {
  //   dispatch(addPostAC(values.post))
  // },
})(PostForm)