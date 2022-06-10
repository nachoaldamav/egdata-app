import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import MDEditor, { commands } from "@uiw/react-md-editor"
import useSWR from "swr"

const title3 = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: { "aria-label": "Insert title3" },
  icon: (
    <svg width="12" height="12" viewBox="0 0 520 520">
      <path
        fill="currentColor"
        d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
      />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `### ${state.selectedText}\n`
    if (!state.selectedText) {
      modifyText = `### `
    }
    api.replaceSelection(modifyText)
  },
}

const gameComponent = {
  name: "gameComponent",
  keyCommand: "gameComponent",
  buttonProps: { "aria-label": "Insert gameComponent" },
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={12}
      width={12}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `<GameCard gameId="${state.selectedText}" />\n`
    if (!state.selectedText) {
      modifyText = `<GameCard gameId="" />\n`
    }
    api.replaceSelection(modifyText)
  },
}

const gameLink = {
  name: "gameLink",
  keyCommand: "gameLink",
  buttonProps: { "aria-label": "Insert gameLink" },
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={12}
      width={12}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `<GamePopUp link="" gameId="">${state.selectedText}</GamePopUp>\n`
    if (!state.selectedText) {
      modifyText = `<GamePopUp link="" gameId="">{children}</GamePopUp>\n`
    }
    api.replaceSelection(modifyText)
  },
}

export default function Editor({ handleChange, value }) {
  return (
    <div className="h-96">
      <MDEditor
        height={"100%"}
        value={value}
        preview={"edit"}
        onChange={(value) => {
          handleChange(value)
        }}
        commands={[
          // Custom Toolbars
          title3,
          commands.group(
            [
              commands.title1,
              commands.title2,
              commands.title3,
              commands.title4,
              commands.title5,
              commands.title6,
            ],
            {
              name: "title",
              groupName: "title",
              buttonProps: { "aria-label": "Insert title" },
            }
          ),
          commands.divider,
          commands.bold,
          commands.italic,
          commands.strikethrough,
          commands.code,
          commands.quote,
          commands.link,
          commands.image,
          commands.orderedListCommand,
          commands.unorderedListCommand,
          commands.divider,
          gameComponent,
          gameLink,
        ]}
      />
    </div>
  )
}

const fetcher = (...args) => fetch(...args).then((r) => r.json())

export function GameComponent({ gameId }) {
  const { data, error } = useSWR(`/api/game/${gameId}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const game = data.Catalog.catalogOffer
  return <div className="text-inherit">{game.title}</div>
}
