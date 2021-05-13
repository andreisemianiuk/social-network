import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { addPostAC, changePostTextAC } from '../../../../redux/reducers/profile-reducer'

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
          type="text"
        />
      </div>
      <button type={'submit'}>Add Post</button>
    </form>
  )
}

export const PostReduxForm = reduxForm<PostDataType>({
  form: 'post',
  onSubmit: (values, dispatch) => {
    dispatch(changePostTextAC(values.post))
    dispatch(addPostAC())
  },
})(PostForm)