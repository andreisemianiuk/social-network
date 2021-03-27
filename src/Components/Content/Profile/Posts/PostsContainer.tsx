import React from 'react'
import { addPostAC, changePostTextAC, ProfilePageType } from '../../../../redux/reducers/profile-reducer'
import { Posts } from './Posts'
import { AppStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

type MapStateToPropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
  onChange: (value: string) => void
  addPost: () => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChange: (value: string) => {
      dispatch(changePostTextAC(value))
    },
    addPost: () => {
      dispatch(addPostAC())
      dispatch(changePostTextAC(''))
    }
  }
}

export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)