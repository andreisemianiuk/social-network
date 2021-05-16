import React from 'react'
import { Form, Formik } from 'formik'
import { login, logout } from '../../redux/reducers/auth-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { MyCheckbox, MyTextInput } from '../../common/forms/inputsForForms'
import * as Yup from 'yup'
import s from './Header.module.css'
import { AppStateType } from '../../redux/redux-store'
import { Redirect } from 'react-router-dom'

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
        dispatch(login(values))
        actions.setSubmitting(false)
      }}
      onReset={(values, actions) => {
        dispatch(logout())
        actions.setSubmitting(true)
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .min(10, 'Must be minimum 10 characters or more')
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .matches(
            /[\S]{8,15}/, 'please enter the correct password',
          )
          .required(
            'Required field',
          ),
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
          <button className={s.loginBtn} type={'submit'}>Log In</button>
          <button className={s.loginBtn} type={'reset'}>Log Out</button>
        </div>
      </Form>
    </Formik>
  )
}


export const LoginPage = () => {
  const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
  if (isAuth) return <Redirect to="/profile"/>
  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
    </div>
  )
}