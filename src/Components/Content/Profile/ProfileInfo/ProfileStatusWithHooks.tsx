import React, { ChangeEvent, useState } from 'react'


interface IProps {
  status: string | null
  changeStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<IProps> = ({status, changeStatus}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [statusValue, setStatusValue] = useState<string | null>(status)
  
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
        : <div onDoubleClick={activateEditMode}>{status}</div>
      }
    </>
  )
}