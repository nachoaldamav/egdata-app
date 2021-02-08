import { signIn, signOut, useSession } from 'next-auth/client'
import Link from "next/link"

export default function LoginComponent() {
  const [session, loading] = useSession()
  return (
    <>
      {!session &&
        <Link href="/login">
					<a className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-500 sm:mt-0 sm:ml-2">
						Sign in
					</a>
	    </Link>
      }
    {session && 
        <Link href="/login">
            <a className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-500 sm:mt-0 sm:ml-2">
                Signed in
            </a>
        </Link>
    }
    </>
  )
}