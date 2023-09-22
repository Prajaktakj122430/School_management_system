import React from 'react'
import './signup.css'

const Button = (props) => {
  return (
    <div>
      <button className='sub'>{props.name}</button>
    </div>
  )
}

export default Button
