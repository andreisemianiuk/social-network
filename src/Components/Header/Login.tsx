import React from 'react'
import styles from './Header.module.css'
import { AuthDataType } from '../../redux/reducers/auth-reducer'

type LoginPropsType = {
  data: AuthDataType
}

export const Login = (props: LoginPropsType) => {
  const {id, email, login} = props.data
  return (
    <div>
      <div>{login}</div>
      <div>{email}</div>
      <div>{id}</div>
    </div>
  )
}