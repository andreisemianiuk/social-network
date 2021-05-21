import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { AuthUserDataType } from '../../redux/reducers/auth-reducer'

type LoginPropsType = {
  authData: AuthUserDataType
  isAuth: boolean
  logout: () => void
}

export const HeaderAuth = (props: LoginPropsType) => {
  const {logout, isAuth} = props
  const {login, photo} = props.authData
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      {isAuth
        ?
        <div className={s.userData}>
          <div onClick={toggleMenu} className={s.photoContainer}>
            <img className={s.photo} src={photo} alt={'ava'}/>
            <div className={s.dropdown}></div>
            {
              isOpen ?
                <div className={s.accountMenu}>
                  <div className={s.menuList}>
                    <p>{login}</p>
                    <p>Settings</p>
                    <hr/>
                    <p className={s.logOut} onClick={logout}>Log Out</p>
                  </div>
                </div>
                : null
            }
          </div>
        </div>
        :
        <div>
          <NavLink to={'login'}>Log In</NavLink>
        </div>}
    </div>
  )
}