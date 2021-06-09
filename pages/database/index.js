import { useGetGames } from "../../components/useRequest"
import Game from "../../components/gameCard"
import AppLayout from "../../components/AppLayout"

export default function IndexPage() {
  const { games, error } = useGetGames("/")

  if (error) return <h1>Something went wrong!</h1>
  if (!games) return <h1>Loading...</h1>

  return (
    <AppLayout>
      <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
        {games.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </div>
    </AppLayout>
  )
}
