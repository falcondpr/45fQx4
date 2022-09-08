import React from 'react'
import { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <article>
        <p style={{ marginBottom: 0 }}>Email:</p>
        <input type="text" />
      </article>
      <article>
        <p style={{ marginBottom: 0 }}>Password:</p>
        <input type="password" />
      </article>

      <button style={{ marginTop: 20 }}>Ingresar</button>
    </div>
  )
}

export default Login
