import React from 'react'
import preloader from '../../images/template/preloader-mini.gif'

export const PreloaderMini = () => {
  return <div style={{
    // marginLeft: '100px',
    // marginTop: '20px',
  }}>
    <img src={preloader} alt={'preloader'}/>
  </div>
}