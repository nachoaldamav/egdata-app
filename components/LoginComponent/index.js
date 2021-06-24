import { signIn, signOut, useSession } from "next-auth/client"
import Link from "next/link"
import { LogIn } from "iconoir-react"

export default function LoginComponent() {
  const [session, loading] = useSession()
  return (
    <>
      {!session && (
        <Link href="/login">
          <a className="py-1 text-white font-semibold rounded px-2 block md:inline-flex hover:bg-gray-500">
            <LogIn height={27} width={27} /> Sign in
          </a>
        </Link>
      )}
      {session && (
        <a
          className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-500 sm:mt-0 sm:ml-2"
          onClick={signOut}
        >
          Hello, {session.user.name}
        </a>
      )}
    </>
  )
}
