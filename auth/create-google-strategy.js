import { OAuth2Strategy } from 'passport-google-oauth'

const BASE_URL = 'http://localhost:3000'
const clientSecret = 'test secret'

const createStrategy = options => ({
  factory: OAuth2Strategy,
  options: {
    clientID:
      '548079334706-3s3rd2146m3stmou170ml53tfr1e5e16.apps.googleusercontent.com',
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}/api/auth/google`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: ['openid', 'profile'],
    ...options
  }
})

export default createStrategy
