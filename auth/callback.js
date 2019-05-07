import jwt from 'jsonwebtoken'

const JWT_SECRET = '2444666668888888'

const callback = async ({ resolve }, accessToken, refreshToken, profile) => {
  const user = {
    displayName: profile.displayName,
    accessToken,
    refreshToken
  }
  console.log('callback user: ', user)
  return jwt.sign(user, JWT_SECRET)
}

export default callback
