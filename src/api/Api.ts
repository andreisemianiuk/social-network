import axios from 'axios'
import { GetUsersResponseType } from '../Components/Content/Users/UsersContainer'
import { ProfileUserType } from '../redux/reducers/profile-reducer'
import { AuthStateType, AuthUserDataType } from '../redux/reducers/auth-reducer'
import { FormDataType } from '../Components/Login/LoginForm'

export type ResponseType<T = {}> = {
  data: T,
  resultCode: number | null
  messages: string[] | null
}

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
  getStatus(userId: string) {
    return customInstance.get<string>(`profile/status/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
  updateStatus(status: string) {
    return customInstance.put<ResponseType<string>>(`profile/status`, {status: status}).then(
      response => {
        return response.data
      },
    )
  },
}

export const AuthAPI = {
  me() {
    return customInstance.get<ResponseType<AuthUserDataType>>(`auth/me`).then(
      response => {
        return response.data
      },
    )
  },
  login(data: FormDataType) {
    return customInstance.post<ResponseType<{ userId: number }>>(`auth/login`,
      {...data}).then(
      response => {
        return response.data
      },
    )
  },
  logout() {
    return customInstance.delete<ResponseType<{}>>(`auth/login`).then(
      response => {
        return response.data
      },
    )
  },
}

export const FollowingAPI = {
  follow(userId: number) {
    return customInstance.post<ResponseType<AuthStateType>>(`follow/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
  unfollow(userId: number) {
    return customInstance.delete<ResponseType<AuthStateType>>(`follow/${userId}`).then(
      response => {
        return response.data
      },
    )
  },
}