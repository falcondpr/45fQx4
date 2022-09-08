import React from 'react'

const Register = () => {
  return (
    <div style={{ padding: 20 }}>
      <article>
        <p style={{ marginBottom: 0 }}>Name:</p>
        <input type="text" />
      </article>
      <article>
        <p style={{ marginBottom: 0 }}>Email:</p>
        <input type="password" />
      </article>
      <article>
        <p style={{ marginBottom: 0 }}>Password:</p>
        <input type="password" />
      </article>

      <button style={{ marginTop: 20 }}>Registrarse</button>
    </div>
  )
}

export default Register
