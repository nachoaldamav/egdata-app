import NextAuth from 'next-auth'

const options = {
  // @link https://next-auth.js.org/configuration/providers
  providers: [
    {
        id: 'epicgames',
        name: 'Epic Games',
        type: 'oauth',
        version: '2.0',
        scope: 'basic_profile',
        params: { grant_type: 'authorization_code' },
        accessTokenUrl: 'https://api.epicgames.dev/epic/oauth/v1/token',
        requestTokenUrl: 'https://api.epicgames.dev/epic/oauth/v1/tokenInfo',
        authorizationUrl: 'https://www.epicgames.com/id/authorize?response_type=code',
        profileUrl: 'https://api.epicgames.dev/epic/oauth/v1/userInfo',
        profile : (profile) => {
            return {
                id: profile.sub,
                name: profile.preferred_username
            }
        },
        idToken: 'true',
        clientId: 'xyza7891lcopZrtftxZbwoSYrLtQiNNz',
        clientSecret: 'UwlA+3A2dKaApsfPcpZHaJVT1sCoOGCUOYmGlqXidLo'
    }
  ],

  // @link https://next-auth.js.org/configuration/options#session
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },

  // @link https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: 'eHl6YTc4OTFsY29wWnJ0ZnR4WmJ3b1NZckx0UWlOTno6VXdsQSszQTJkS2FBcHNmUGNwWkhhSlZUMXNDb09HQ1VPWW1HbHFYaWRMbw==',
    // Set to true to use encryption. Defaults to false (signing only).
    encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    encode: async ({ secret, token, maxAge }) => {},
    decode: async ({ secret, token, maxAge }) => {},
  },

  // @link https://next-auth.js.org/configuration/callbacks
  callbacks: {
    signIn: async (user, account, profile) => {
        return Promise.resolve(true)
      },
      redirect: async (url, baseUrl) => {
        return Promise.resolve(baseUrl)
      },
      session: async (session, user) => {
        return Promise.resolve(session)
      },
      jwt: async (token, user, account, profile, isNewUser) => {
        return Promise.resolve(token)
    },

    /**
     * @link https://next-auth.js.org/configuration/callbacks#jwt-callback
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = (user) ? true : false
      // Add auth_time to token on signin in
      if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
      return Promise.resolve(token)
    },
  },

  // You can define custom pages to override the built-in pages
  // The routes shown here are the default URLs that will be used.
  // @link https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/api/auth/signin',
    signOut: '/api/auth/signout',
    error: '/api/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/api/auth/verify-request', // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },

  // Additional options
  // secret: 'abcdef123456789' // Recommended (but auto-generated if not specified)
  debug: true, // Use this option to enable debug messages in the console
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth