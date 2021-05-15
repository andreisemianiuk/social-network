import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import s from './Posts.module.css'

export type PostFormPropsType = {
  addPost: (value: string) => void
}
export type PostDataType = {
  post: string
}

export const PostForm: React.FC<PostFormPropsType> = ({addPost}) => {
  const initialValues: PostDataType = {post: ''}
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        post: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, actions) => {
        addPost(values.post)
        actions.setSubmitting(false)
      }}
    >
      <Form>
        <Field
          name="post"
          component="textarea"
          className={s.textarea}
        />
        <ErrorMessage name="post" component="div" className={s.error}/>
        <div>
          <button className={s.btn}>Add Post</button>
        </div>
      </Form>
    </Formik>
  )
}