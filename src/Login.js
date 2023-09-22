import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from './Button'
import './login.css'
import { view_off } from 'react-icons-kit/ikons/view_off'

import { eye } from 'react-icons-kit/iconic/eye'
import { Icon } from 'react-icons-kit'

function Login() {
  const navigate = useNavigate()
  //hold the value in state
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailerror] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [usererror, setUserError] = useState(false)

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(view_off)

  const validUsername = () => {
    if (username.length > 5) {
    } else {
      setUserError(true)
    }
  }
  useEffect(() => {
    validUsername('')
  })

  //expression for email

  const validateEmail = () => {
    const pattern = /^[a-z0-9]\S+@\S+\.\S+/
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (pattern.test(email)) {
      setEmailerror(true)
      alert('Correct mail')
    } else if (!pattern.test(email)) {
      alert('Incorrect mail')
    } else {
      setEmailerror(true)
    }
  }

  //expression for password
  const validatePassword = () => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (pattern.test(password)) {
      setPasswordError(true)
      alert('Would you like to submit..')
    } else if (!pattern.test(password)) {
    } else {
      setPasswordError(true)
    }
  }
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(view_off)
      setType('password')
    }
  }

  //store data in local storage
  const handleSubmit = (e) => {
    //not refresh by default
    e.preventDefault()
    if (emailError === true && passwordError === true && usererror === true) {
      //to store data in local storage and convert this object in to string
      localStorage.setItem('user', JSON.stringify(username))
      localStorage.setItem('prajuemail', JSON.stringify(email))
      localStorage.setItem('prajupass', JSON.stringify(password))

      navigate('/signup')
    }
  }

  return (
    //form
    <div className='app'>
      <span className='para'>
        <h1 className='para1'>School Nation </h1>
        <h3 className='subtitle'>we MaKe DrEaMs CoMe TrUe.....</h3>
      </span>
      <div className='login-form'>
        <div className='title'>Sign Up</div>

        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label>
                <b>Username:</b>
              </label>
              <input
                type='text'
                name='name'
                value={username}
                minLength={5}
                maxLength={10}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter username'
                onBlur={validUsername}
              />
            </div>

            <div className='input-container'>
              <label>
                <b>Email:</b>
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter Email'
                onBlur={validateEmail}
              />
            </div>

            <div className='input-container'>
              <label>
                <b>
                  <b>Password:</b>
                </b>
              </label>

              <input
                type={type}
                name='password'
                value={password}
                required
                minLength={8}
                maxLength={25}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} />
              </span>
            </div>

            <div className='button-container'>
              <Button type='submit' className='sub' name='Sign up' />
              {/* Sign up
              </button> */}
            </div>
            <p className='text'>
              Have already account?
              <Link to='/signup'>
                &nbsp;
                <u>
                  <b>Login here</b>
                </u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
