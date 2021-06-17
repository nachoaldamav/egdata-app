import { DbError } from "iconoir-react"
import AppLayout from "../components/AppLayout"

export default function ErrorMessage() {
  return (
    <AppLayout>
      <div className="text-5xl text-white container mx-auto px-11 py-5 flex justify-center">
        <div className="error-message">
          <DbError />
          <p className="text-3xl text-white py-5">
            Unable to connect to the database!
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
