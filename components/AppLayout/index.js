import { Navbar } from '../navbar'

export default function AppLayout ({children}) {
    return (
      <>
        <div>
          <main>
              <Navbar/>
            {children}
          </main>
        </div>
      </>
    )
  }