import Link from "next/link"
import dynamic from "next/dynamic"
import { useState } from "react"

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false,
})

export default function EditorPage() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
    category: "",
    image: "",
  })

  const [postBody, setPostBody] = useState("")

  return (
    <div className="w-full h-fit flex flex-col mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center text-white">Editor</h1>
      <div className="flex flex-col h-fit">
        <form
          className="flex flex-col h-fit"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(formData)
          }}
        >
          <div className="flex flex-col gap-2 w-full mx-auto md:w-2/3">
            <label className="text-white text-2xl font-bold">Title</label>
            <input
              className="w-full h-8 p-2 border-2 border-white rounded-lg"
              type="text"
              placeholder="Title..."
              name="title"
              value={formData.title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }}
            />
            <label className="text-white text-2xl font-bold inline-flex items-center justify-between">
              Body{" "}
              <Link
                href={`/dashboard/preview-post?source=${encodeURIComponent(
                  postBody
                )}&title=${formData.title}&image=${formData.image}`}
              >
                <a
                  className="text-white text-xl font-bold underline"
                  target={"_blank"}
                >
                  Preview
                </a>
              </Link>
            </label>
            <Editor
              value={postBody}
              handleChange={(value) => {
                setPostBody(value)
              }}
            />
            <div className="flex flex-row gap-2 mt-4">
              <label className="text-white text-2xl font-bold">Tags</label>
              <input
                className="w-full h-8 p-2 border-2 border-white rounded-lg"
                type="text"
                placeholder="Tags (comma separated)..."
                name="tags"
                value={formData.tags}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    tags: e.target.value,
                  })
                }}
              />
              <label className="text-white text-2xl font-bold">Category</label>
              <select className="w-full rounded-lg" defaultValue={"none"}>
                <option value="none">Select a category...</option>
                <option value="news">News</option>
                <option value="events">Events</option>
                <option value="leaks">Leaks</option>
              </select>
            </div>
            <label className="text-white text-2xl font-bold">Image</label>
            <input
              className="w-full h-8 p-2 border-2 border-white rounded-lg"
              type="text"
              placeholder="Image..."
              name="image"
              value={formData.image}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.value,
                })
              }}
            />

            <button
              className="w-full h-fit p-2 border-2 border-white text-white rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
