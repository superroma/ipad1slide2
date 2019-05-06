import jwt from 'jsonwebtoken'

const JWT_SECRET = '2444666668888888'

const callback = async ({ resolve }, jwtObject, accessToken, profile) => {
  const user = {
    ...profile
  }

  return jwt.sign(user, JWT_SECRET)
}

export default callback
