import React from 'react'
import { Form, Formik } from 'formik'
import { loginUserTC } from '../../redux/reducers/auth-reducer'
import { useDispatch } from 'react-redux'
import { MyCheckbox, MyTextInput } from '../../common/forms/inputsForForms'
import * as Yup from 'yup'
import s from './Header.module.css'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: boolean
}

const LoginForm: React.FC = () => {
  const initialValues: FormDataType = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: false,
  }
  const dispatch = useDispatch()
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(loginUserTC(values))
        actions.setSubmitting(false)
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .min(10, 'Must be minimum 10 characters or more')
          .email('Invalid email address')
          .required('Required'),
      })}
    >
      <Form>
        <div>
          <MyTextInput
            name="email"
            type="email"
            placeholder="login"
          />
        </div>
        <div>
          <MyTextInput
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <MyCheckbox
            name="rememberMe"
          >
            remember me
          </MyCheckbox>
        </div>
        <div>
          <button className={s.loginBtn} type={'submit'}>Login</button>
        </div>
      </Form>
    </Formik>
  )
}


export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
    </div>
  )
}

