import React from 'react'

const Login = () => {
  return (
    <>
    <div className="card alert alert-warning py-3">
    <label htmlFor="Name">E-mail</label>
    <input className='form-control w-50' type="text" /> <br />
    <label  htmlFor="Name">Password</label>
    <input className='form-control w-50' type="password"  /><br />

    <a className='text-dark' href="/user">LogIn</a>
    </div>
    </>
  )
}

export default Login