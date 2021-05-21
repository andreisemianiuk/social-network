import React from 'react'
import { addPostAC, PostType } from '../../../../redux/reducers/profile-reducer'
import { Posts } from './Posts'
import { RootStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getPosts } from '../../../../redux/selectors/posts-selectors'

type MapStateToPropsType = {
  posts: PostType[]
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  posts: getPosts(state),
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  addPost: (newPostText: string) => {
    dispatch(addPostAC(newPostText))
  },
})

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)