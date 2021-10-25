import React from 'react'
import styles from '../Profile.module.css'
import { ProfileUserType } from '../../../../redux/reducers/profile-reducer'
import up from '../../../../images/template/like.png'
import down from '../../../../images/template/thumbs-down.png'
import { Avatar } from '../../../../images/template/avatar'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'


type ProfileInfoPropsType = {
  profile: ProfileUserType
  status: string | null
  statusIsFetching: boolean
  changeStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (
  {
    profile,
    status,
    statusIsFetching,
    changeStatus,
  },
) => {
  const {fullName, contacts, lookingForAJob, lookingForAJobDescription, photos} = profile
  
  return (
    <div className={styles.profileBlock}>
      <div className={styles.leftSideInfo}>
        <div>
          <img className={styles.photo} src={photos.small ? photos.small : Avatar} alt={'ava'}/>
        </div>
        <div className={styles.name}>{fullName}</div>
        {/*<ProfileStatus status={props.status} changeStatus={props.changeStatus}/>*/}
        <ProfileStatusWithHooks status={status} statusIsFetching={statusIsFetching} changeStatus={changeStatus}/>
      </div>
      <div className={styles.jobBlock}>
        <div>
          <span>Looking for A Job:</span>
          <img className={styles.jobLike} src={lookingForAJob ? down : up} alt={'thumb'}/>
        </div>
        <p>Job status: <span>{lookingForAJobDescription}</span></p>
      </div>
      <div className={styles.contacts}>contacts:
        <div>FB: {contacts.facebook}</div>
        <div>Instagram: {contacts.instagram}</div>
        <div>GitHub: {contacts.github}</div>
        <div>MainLink: {contacts.mainLink}</div>
        <div>Twitter: {contacts.twitter}</div>
        <div>VK: {contacts.vk}</div>
        <div>Website: {contacts.website}</div>
        <div>Youtube: {contacts.youtube}</div>
      </div>
    </div>
  )
}