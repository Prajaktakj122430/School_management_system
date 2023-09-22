import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Field from './Field'

const Create = () => {
  //hold the value in state
  const [values, setvalues] = useState({
    name: '',
    phone: '',
    email: '',
    standard: '',
    address: '',
  })
  const navigate = useNavigate()

  const eName = (e) => {
    setvalues({ ...values, name: e.target.value })
  }

  const ePhone = (e) => {
    setvalues({ ...values, phone: e.target.value })
  }
  const eMaill = (e) => {
    setvalues({ ...values, email: e.target.value })
  }
  const eStd = (e) => {
    setvalues({ ...values, standard: e.target.value })
  }

  const eAdd = (e) => {
    setvalues({ ...values, address: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3000/students', values)
      .then((show) => {
        console.log(show)
        navigate('/dashboard')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div
      className='d-flex  flex-column w-100 vh-100 justify-content-center align-items-center bg-light'
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1269852728/video/creative-concept-design-with-funny-character.jpg?s=640x640&k=20&c=leUepiMETtm1_a93OdykxZFormhUZ9JScuKWDCl8WBI=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
      }}
    >
      <div
        className='w-40  bg-white  pt-3  rounded'
        style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px' }}
      >
        <h1>🎒Add a Student</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <Field
              type={'text'}
              name={'name'}
              placeholder={'Enter Name'}
              onChange={eName}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='phone'>Phone:</label>
            <Field
              type={'text'}
              name={'phone'}
              placeholder={'Enter phone'}
              onChange={ePhone}
              maxLength={10}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <Field
              type={'text'}
              name={'email'}
              placeholder={'enter Email'}
              onChange={eMaill}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='name'>Standard:</label>
            <Field
              type={'text'}
              name={'standard'}
              placeholder={'Enter std'}
              onChange={eStd}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='address'>Address:</label>
            <Field
              type={'text'}
              name={'address'}
              placeholder={'Enter address'}
              onChange={eAdd}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
          <Link to='/dashboard' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Create
