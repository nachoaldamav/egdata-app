import AppLayout from "../../components/AppLayout"
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Login() {
  const [session, loading] = useSession()
  return (
    <AppLayout>
      {loading && <>
        <p>Loading...</p>
      </>
      }
      {!session && <div className="text-white text-xl text-center">
      <br/>
      <button className="btn h-15 w-auto px-4 py-2 bg-black epic-login inline rounded-md" onClick={() => signIn()}><img className="inline m-1" height="25px" width="24" src="/img/Epic-Games-White-Solid.png" />Sign in with Epic Games</button>
    </div>}
    {session && <div className="text-white text-xl text-center">
      Signed in as {session.user.name}<br/>
      <button className="btn h-15 w-auto px-4 py-2 bg-black epic-login inline rounded-md" onClick={signOut}>Sign out</button>
    </div>}
    </AppLayout>
  )
}