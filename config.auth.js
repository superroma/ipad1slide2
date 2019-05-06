import resolveModuleAuth from 'resolve-module-auth'

const moduleAuth = resolveModuleAuth([
  {
    name: 'google-strategy',
    createStrategy: 'auth/create-google-strategy.js',
    logoutRoute: {
      path: 'auth/logout',
      method: 'GET'
    },
    routes: [
      {
        path: 'auth/google',
        method: 'GET',
        callback: 'auth/callback.js'
      }
    ]
  }
])

export default moduleAuth
