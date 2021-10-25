import React, { ChangeEvent, useEffect, useState } from 'react'
import loader from '../../../../images/template/loader.svg'
import { Preloader } from '../../../../common/Preloaders/Preloader'

interface IProps {
  status: string | null
  statusIsFetching: boolean
  changeStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<IProps> = ({status, statusIsFetching, changeStatus}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [statusValue, setStatusValue] = useState<string | null>(status)
  // const [statusIsFetching, setStatusIsFetching] = useState<boolean>(false)
  
  useEffect(() => {
    setStatusValue(status)
  }, [status])
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusValue(e.currentTarget.value)
  }
  const activateEditMode = () => {
    setEditMode(true)
  }
  const handleChangeStatus = () => {
    if (statusValue) changeStatus(statusValue)
    setEditMode(false)
  }
  return (
    <>
      {editMode
        ? <div>
          <input
            onBlur={handleChangeStatus}
            onChange={onChangeHandler}
            value={statusValue || ''}
            autoFocus={true}
          />
        </div>
        : statusIsFetching
          // ? <img src={loader} alt={'preloader for status'}/>
        ? <Preloader/>
          : <div onDoubleClick={activateEditMode}>{status}</div>
      }
    </>
  )
}