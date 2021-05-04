import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthStateType } from '../../redux/reducers/auth-reducer'

type LoginPropsType = {
  data: AuthStateType
  userData: Array<string | undefined>
}

export const Login = (props: LoginPropsType) => {
  // const {id, email, login} = props.data
  const [name, img] = props.userData
  return (
    <div>
      {
        name
          ?
          <div>
            <div>{name}</div>
            <div>
              <img src={img}/>
            </div>
          </div>
          :
          <div>
            <NavLink to={'login'}>Sign In</NavLink>
          </div>
      }
    
    </div>
  )
}