import React, { ChangeEvent } from 'react'


interface IProps {
  status: string | null
  changeStatus: (status: string) => void
}

interface IState {
  editMode: boolean
  status: string | null
}

export class ProfileStatus extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      editMode: false,
      status: this.props.status,
    }
  }
  
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  
  onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }
  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }
  changeStatus = () => {
    if (this.state.status) {
      this.props.changeStatus(this.state.status)
      this.deactivateEditMode()
    }
  }
  
  render() {
    return (
      <>
        {this.state.editMode
          ? <div>
            <input
              onBlur={this.changeStatus}
              onChange={this.onChangeHandler}
              value={this.state.status || ''}
              autoFocus={true}
            />
          </div>
          : <div onDoubleClick={this.activateEditMode}>{this.state.status}</div>
        }
      </>
    )
  }
}