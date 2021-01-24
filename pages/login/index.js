import AppLayout from "../../components/AppLayout"
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Login() {
  const [session, loading] = useSession()
  return (
    <AppLayout>
      {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in<br/>
      <button onClick={signOut}>Sign out</button>
    </>}
    </AppLayout>
  )
}