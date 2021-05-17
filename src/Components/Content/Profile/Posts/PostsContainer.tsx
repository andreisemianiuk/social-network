import React from 'react'
import { addPostAC, ProfilePageType } from '../../../../redux/reducers/profile-reducer'
import { Posts } from './Posts'
import { RootStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

type MapStateToPropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)