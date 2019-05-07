import React from 'react'

import Header from './Header.js'

const App = () => (
  <div>
    <Header
      title="reSolve Hello World"
      name="Hello World Example"
      favicon="/favicon.ico"
      css={['/bootstrap.min.css']}
    />
    <a href="/api/login">
      <h1 align="center">Login</h1>
    </a>
  </div>
)

export default App
