import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './signup.css'
import Loginbutton from './Loginbutton'

import { view_off } from 'react-icons-kit/ikons/view_off'

import { eye } from 'react-icons-kit/iconic/eye'
import { Icon } from 'react-icons-kit'

function Signup() {
  const navigate = useNavigate()
  //hold details in state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(view_off)

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(view_off)
      setType('password')
    }
  }

  //access the event
  //arrow fun helps to make code reusable and structured

  const handleLogin = (e) => {
    e.preventDefault()

    //store data in variable
    const loguser = JSON.parse(localStorage.getItem('user'))
    const logem = JSON.parse(localStorage.getItem('prajuemail'))
    const logpass = JSON.parse(localStorage.getItem('prajupass'))

    if (email === logem && password === logpass) {
      localStorage.setItem('login', true)
      //for navigate to dashboard
      navigate('/dashboard')
    } else {
      alert('Invalid Details')
    }
  }

  // for login form

  return (
    <div className='app'>
      <span className='para'>
        <h1 className='para1'>School Nation </h1>
        <h3 className='subtitle'>Learning ToDay . . . Leading Tomorrow</h3>
      </span>
      <div className='login-form'>
        <div className='title'>Log in</div>

        <div className='form'>
          <form onSubmit={handleLogin}>
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
              />
            </div>

            <div className='input-container'>
              <label>
                <b>Password:</b>
              </label>
              <input
                type={type}
                name='password'
                value={password}
                required
                minLength={8}
                maxLength={20}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={25} />
              </span>
            </div>
            <div className='button-container'>
              <Loginbutton type='submit' className='sub' name='Log in' />
              {/* Log in
              </Button> */}
            </div>
            <p className='tx'>
              Don't have an account?
              <Link to='/'>
                &nbsp;
                <u>
                  <b>Sign up</b>
                </u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup
