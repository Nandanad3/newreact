import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>
        Login Page
        </h1>
        User Name:<input type="text" name="Name" id="name" /><br></br><br></br>
        Password: <input type="password" name="password" id="Password" /><br></br><br></br>
        <input type="button" value="Login" />
    </div>
  )
}

export default Login