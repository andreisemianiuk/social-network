import React from 'react'
import styles from '../Profile.module.css'
import { ProfileUserType } from '../../../../redux/reducers/profile-reducer'
import up from '../../../../images/template/like.png'
import down from '../../../../images/template/thumbs-down.png'
import { Avatar } from '../../../../images/template/avatar'
import { ProfileStatus } from './ProfileStatus'


type ProfileInfoPropsType = {
  profile: ProfileUserType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  const {fullName, contacts, lookingForAJob, lookingForAJobDescription, photos} = props.profile
  
  return (
    <div className={styles.profileBlock}>
      <div className={styles.leftSideInfo}>
        <div>
          <img className={styles.photo} src={photos.small ? photos.small : Avatar} alt={'ava'}/>
        </div>
        <div className={styles.name}>{fullName}</div>
        <ProfileStatus/>
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