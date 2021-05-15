import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export type DialogDataType = {
  dialog: string
}

const DialogForm = (props: InjectedFormProps<DialogDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="dialog"
          component="textarea"
        />
      </div>
      <button>Add Message</button>
    </form>
  )
}

export const DialogReduxForm = reduxForm<DialogDataType>({
  form: 'dialog',
})(DialogForm)