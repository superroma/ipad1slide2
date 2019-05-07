import { OAuth2Strategy } from 'passport-google-oauth'

const BASE_URL = 'http://localhost:3000'
const GOOGLE_CLIENT_SECRET = 

const createStrategy = options => ({
  factory: OAuth2Strategy,
  options: {
    clientID:
      '254594036926-1r3codete1i83sdqgc9t9mirlor2vlhb.apps.googleusercontent.com',
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}/api/login`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: [
      'openid',
      'profile',
      'https://www.googleapis.com/auth/photoslibrary.readonly'
    ],
    ...options
  }
})

export default createStrategy
