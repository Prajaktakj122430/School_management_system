import React from 'react'
import { Link } from 'react-router-dom'
const Table = ({ handleDelete, data }) => {
  return (
    <table className='table table-striped table-bordered '>
      <thead
        style={{
          position: 'sticky',
          top: 65,
        }}
      >
        <tr class='table-info '>
          <th>ID</th>
          <th>Name</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Standard</th>
          <th>Address</th>
          <th>Action</th>
          <th>
            <div className='d-flex justify-content-end'>
              <Link to='/create' className='btn btn-success'>
                Add
              </Link>
            </div>
          </th>
        </tr>
      </thead>
      <tbody
        style={{
          marginTop: 100,
        }}
      >
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.phone}</td>
            <td>{d.email}</td>
            <td>{d.standard}</td>
            <td>{d.address}</td>
            <td>
              <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>
                Read
              </Link>
              <Link
                to={`/update/${d.id}`}
                className='btn btn-sm btn-primary me-2'
              >
                Edit
              </Link>
              <button
                onClick={(e) => handleDelete(d.id)}
                className='btn btn-sm btn-danger'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
