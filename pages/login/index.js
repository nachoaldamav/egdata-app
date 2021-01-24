import AppLayout from "../../components/AppLayout"
import { signin, signout, useSession } from 'next-auth/client'

export default function Login() {
  const [session, loading] = useSession()
  return (
    <AppLayout>
      {!session && (
          <>
            <span>Not signed in</span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signin()
              }}
            >
              <button>Sign in</button>
            </a>
          </>
        )}
        {session && (
          <>
            <span>Signed in as {session.user.name}</span>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signout()
              }}
            >
              <button>Sign out</button>
              </a>
          </>
        )}
    </AppLayout>
  )
}