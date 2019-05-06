import { OAuth2Strategy } from 'passport-google-oauth'

const BASE_URL = 'http://localhost:3000'
const GOOGLE_CLIENT_SECRET = 'test secret'

const createStrategy = options => ({
  factory: OAuth2Strategy,
  options: {
    clientID:
      '254594036926-1r3codete1i83sdqgc9t9mirlor2vlhb.apps.googleusercontent.com,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}/callback`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: ['openid', 'profile'],
    ...options
  }
})

export default createStrategy
