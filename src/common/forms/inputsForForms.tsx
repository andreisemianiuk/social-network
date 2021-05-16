import React, { CSSProperties } from 'react'
import { FieldHookConfig, useField } from 'formik'

const inputStyles = {
  input: {
    width: '200px',
    height: '25px',
    margin: '0 20px',
  },
  errorContainer: {
    height: '20px',
    padding: '5px 25px',
  },
  error: {
    color: 'red',
  },
}
const checkboxStyles = {
  checkbox: {
    margin: '0 0 20px 20px',
  },
}

type InputPropsType = {
  label?: string
  style?: CSSProperties | undefined
}

export const MyTextInput = (props: InputPropsType & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input style={inputStyles.input} {...field} type={props.type} placeholder={props.placeholder}/>
      <div style={inputStyles.errorContainer}>
        {meta.touched && meta.error ? (
          <div style={{...inputStyles.error, ...props.style}}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export const MyCheckbox: React.FC<FieldHookConfig<string>> = ({children, ...props}) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({...props, type: 'checkbox'})
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" style={checkboxStyles.checkbox} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const MySelect: React.FC<FieldHookConfig<string> & InputPropsType> = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}