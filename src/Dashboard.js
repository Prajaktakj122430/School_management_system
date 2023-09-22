import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import Table from './Table'
const Dashboard = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.setItem('login', false)
    navigate('/signup')
  }
  const uname = JSON.parse(localStorage.getItem('user'))
  console.log(uname)

  useEffect(() => {
    //serves create http
    axios
      .get('http://localhost:3000/students')
      .then((show) => setData(show.data))
      .catch((err) => console.log(err))
  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm('Would you Like to Delete ?')
    if (confirm) {
      axios
        .delete('http://localhost:3000/students/' + id)
        .then((show) => {
          window.location.reload()
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <>
      <nav
        className='d-flex navbar sticky-top navbar-expand-lg   text-dark navbar-scrolled '
        style={{
          backgroundImage: 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)',
        }}
      >
        <div className='container-fluid'>
          <a href='#' class='navbar-brand'>
            <img
              className='icon'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOMEYnGa-fno-UevGaD_d4k1IjxJXcKFtPRzkaaOcWU_g4yUfggkHaAeWmv2xjg_kLj4&usqp=CAU'
              width='40'
              height='40'
              alt=''
              style={{ opacity: 0.9 }}
            />
            &nbsp;&nbsp;
            <b>School Nation</b>
          </a>
          <div className='collapse navbar-collapse' id='navbar-collapse'>
            <div className='navbar-nav ms-auto'>
              <img
                src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
                width='40'
                height='40'
                alt=''
                style={{ opacity: 0.7 }}
              />
              &nbsp;<b style={{ marginTop: 7 }}>{uname}</b>
              <button className='logout' onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div>
          <h1
            className='list'
            style={{
              position: 'sticky',
              // top: 70,
              backgroundImage:
                'radial-gradient(circle,   #eecda3 0%, #ef629f  70%)',
              textAlign: 'center',
            }}
          >
            List Of Students
          </h1>
        </div>
      </nav>

      <div
        class='d-flex  flex-column justify-content-center align-items-center bg-light top-fixed'
        style={{
          backgroundImage: 'linear-gradient(to right, #9796f0, #fbc7d4)',
        }}
      >
        <div className='w-75 rounded bg-white border shadow p-4'>
          <Table data={data} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
