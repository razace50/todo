import React, {useState} from 'react'

const Login = () => {
  return (
    <>
    <div>
        <form>
            <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
            <button type="submit">Login</button>
        </form>
    </div>
    </>
  )
}

export default Login