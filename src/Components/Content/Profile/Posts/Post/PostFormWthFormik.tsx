import React from 'react'
import { useFormik } from 'formik'
import { addPostAC } from '../../../../../redux/reducers/profile-reducer'

export const AddPostForm = () => {
  const formik = useFormik({
    initialValues: {
      post: '',
      dispatch: addPostAC,
    },
    onSubmit: (values, dispatch) => {
      // alert(JSON.stringify(values, null, 2))
      // dispatch(changePostTextAC(values.post))
      addPostAC(values.post)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        id="post"
        name="post"
        onChange={formik.handleChange}
        value={formik.values.post}
      />
      <button type="submit">Add Post</button>
    </form>
  )
}