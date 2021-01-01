

export default function AppLayout ({children}) {
    return (
      <>
        <div className="bg-gray-900 h-full min-h-screen">
          <main>
                {children}
          </main>
        </div>
      </>
    )
  }