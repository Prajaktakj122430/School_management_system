import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Update = () => {
  // const [data, setData] = useState([])
  const { id } = useParams()
  const [values, setvalues] = useState({
    name: '',
    phone: '',
    email: '',
    standard: '',
    address: '',
  })
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('http://localhost:3000/students/' + id)
      .then((show) => {
        setvalues(show.data)
      })
      .catch((err) => console.log(err))
  }, id)

  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put('http://localhost:3000/students/' + id, values)
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
          'url("https://media.istockphoto.com/id/1278507736/vector/vector-frame-back-to-school-with-education-doodle-icon-symbols-on-green-chalkboard-eps10.jpg?s=612x612&w=0&k=20&c=tJfcltxqhsRJnl5ig7tMpM7UhrFJyu_Rg-J52Hv0Mis=")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='w-70 border bg-white shadow  px-5 pt-3 pb-5 rounded'>
        <h1>Update a Student</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter name'
              minLength={10}
              value={values.name}
              onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='phone'>Phone:</label>
            <input
              type='text'
              name='phone'
              className='form-control'
              placeholder='Enter phone'
              maxLength={10}
              value={values.phone}
              onChange={(e) => setvalues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter email'
              value={values.email}
              required
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='name'>Standard:</label>
            <input
              type='text'
              name='standard'
              className='form-control'
              placeholder='Enter standard'
              value={values.standard}
              onChange={(e) =>
                setvalues({ ...values, standard: e.target.value })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='address'>Address:</label>
            <input
              type='text'
              name='address'
              className='form-control'
              placeholder='Enter address'
              value={values.address}
              onChange={(e) =>
                setvalues({ ...values, address: e.target.value })
              }
            />
          </div>

          <button className='btn btn-success'>Update</button>
          <Link to='/dashboard' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update
