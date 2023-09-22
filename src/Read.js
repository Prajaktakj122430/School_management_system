import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Read() {
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios
      .get('http://localhost:3000/students/' + id)
      .then((show) => setData(show.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div
      className='d-flex  flex-column w-100 vh-100  justify-content-center align-items-center bg-light'
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2018/07/05/16/59/frame-3518725_640.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className='w-50 border bg-white shadow  px-5 pt-3 pb-5 rounded'
        style={{ boxShadow: 'rgba(2, 03, 3, 0.05) 0px 1px 2px 0px' }}
      >
        <h3 style={{ textAlign: 'center' }}> Details of User</h3>
        <hr></hr>
        <div className='mb-2'>
          <strong>Name&nbsp;:&nbsp;{data.name}</strong>
        </div>
        <hr></hr>
        <div className='mb-2'>
          <strong>Phone&nbsp;:&nbsp;&nbsp;{data.phone}</strong>
        </div>
        <hr></hr>
        <div className='mb-2'>
          <strong>Email&nbsp;:&nbsp;{data.email}</strong>
        </div>
        <hr></hr>
        <div className='mb-2'>
          <strong>Standard&nbsp;:&nbsp;{data.standard}</strong>
        </div>
        <hr></hr>
        <div className='mb-2'>
          <strong>Address&nbsp;:&nbsp;&nbsp;{data.address}</strong>
        </div>
        <hr></hr>
        <Link to={`/update/${id}`} className='btn btn-success'>
          Edit
        </Link>
        <Link to='/dashboard' className='btn btn-primary ms-3'>
          Back
        </Link>
      </div>
    </div>
  )
}

export default Read
