import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

const options = {
  // @link https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Auth0({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        domain: process.env.AUTH0_DOMAIN
      })
  ],
  // Additional options
  // secret: 'abcdef123456789' // Recommended (but auto-generated if not specified)
  debug: true, // Use this option to enable debug messages in the console
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth