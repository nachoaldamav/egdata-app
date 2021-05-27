import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router"
import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton'
import Image from 'next/image'

export default function redirectPage({ id, metadata }) {
    const { game, isLoading, isError } = useGame(id)
    if (isLoading) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <Skeleton className="mx-auto" variant="rect" width="75%" height={630} animation="wave" />
                <br />
                <Skeleton variant="text" width="25%" animation="wave" />
            </div>
        </AppLayout>
    )
    if (isError) return (
        <AppLayout><p className="text-5xl text-white text-center py-5">Failed to load</p></AppLayout>
    )

    return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2 content-center items-center text-white text-center">
                <div className="py-2">
                    <p className="text-2xl">You are about to be redirected to {game.title} checkout!</p>
                    <p className="text-xl">Make sure you are logged in to Epic Games first.</p>
                </div>
                <div>
                    <button className="btn h-15 w-auto px-4 bg-black epic-login inline rounded-md"><img className="inline m-1" height="25px" width="24" src="/img/Epic-Games-White-Solid.png" />Go to Epic Games</button> 
                    <p>Or wait 5 seconds...</p>
                </div>
                <br>
                </br>
                <Image
                    src={game.DieselStoreFrontTall || game.OfferImageTall || '/img/egs-placeholder.png'}
                    width={300}
                    height={450}
                    className="my-2 w-full rounded-md absolute"
                    />
            </div>
        </AppLayout>
    )
}

function useGame (context) {
    const router = useRouter()
    const { id } = router.query
    let selectedCountry;
    if (typeof window !== 'undefined') {
        selectedCountry = localStorage.getItem('selectedCountry');
    }

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`https://api.egdata.app/game.php?title=${id}&country=${selectedCountry || 'US'}`, fetcher)
    return {
      game: data,
      isLoading: !error && !data,
      isError: error
    }
  }
