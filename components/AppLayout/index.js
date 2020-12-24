import { Navbar } from '../navbar'

export default function AppLayout ({children}) {
    return (
      <>
        <div className="bg-gray-900 h-screen">
          <main>
              <Navbar/>
                {children}
          </main>
        </div>
      </>
    )
  }