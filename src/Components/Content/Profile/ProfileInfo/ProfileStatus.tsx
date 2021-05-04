import React, { ChangeEvent } from 'react'


interface IProps {
}

interface IState {
  editMode: boolean
  status: string
}

export class ProfileStatus extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      editMode: false,
      status: 'Any status',
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
  
  render() {
    return (
      <>
        {this.state.editMode
          ? <div>
            <input
              onBlur={this.deactivateEditMode}
              onChange={this.onChangeHandler}
              value={this.state.status}
              autoFocus={true}
            />
          </div>
          : <div onDoubleClick={this.activateEditMode}>{this.state.status}</div>
        }
      </>
    )
  }
}