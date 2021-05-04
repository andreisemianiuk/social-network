import React from 'react'
import { AuthStateType } from '../../redux/reducers/auth-reducer'

type LoginPropsType = {
  data: AuthStateType
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