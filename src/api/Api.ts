import axios from 'axios'
import { GetUsersResponseType } from '../Components/Content/Users/UsersContainer'
import { ProfileUserType } from '../redux/reducers/profile-reducer'
import { AuthStateType } from '../redux/reducers/auth-reducer'

const customInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '7b4001e9-c455-4bb5-8814-d09f26458311'},
})

export const UsersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return customInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(
      response => {
        return response.data
      },
    )
  },
}

export const ProfileAPI = {
  getProfile(userId: string) {
    return customInstance.get<ProfileUserType>(`profile/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
}

export const AuthAPI = {
  me() {
    return customInstance.get<AuthStateType>(`auth/me`).then(
      response => {
        return response.data.data
      },
    )
  },
}

export const FollowingAPI = {
  follow(userId: number) {
    return customInstance.post<AuthStateType>(`follow/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
  unfollow(userId: number) {
    return customInstance.delete<AuthStateType>(`follow/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
}