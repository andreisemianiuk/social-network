import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import s from './Dialogs.module.css'

export type DialogFormikPropsType = {
  id: string
  sendMessage: (value: string, id: string) => void
}
export type DialogFormikDataType = {
  dialog: string
}

export const DialogFormik: React.FC<DialogFormikPropsType> = ({id, sendMessage}) => {
  const initialValues: DialogFormikDataType = {dialog: ''}
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        dialog: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, actions) => {
        sendMessage(values.dialog, id)
        actions.setSubmitting(false)
      }}
    >
      <Form>
        <Field
          id="dialog"
          name="dialog"
          as="textarea"
        />
        <ErrorMessage name="dialog" component="div" className={s.error}/>
        <div>
          <button>Add Message</button>
        </div>
      </Form>
    </Formik>
  )
}