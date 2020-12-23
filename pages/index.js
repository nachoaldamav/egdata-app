import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'

let EGS_Url = "https://epicgames.com/store/product/"

const loading = false

const Todo = ({ todos }) => {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Epic Games Data</title>
            </Head>

            <style jsx>{`
                .true {
                    text-decoration: line-through;
                }
                .card {
                    border-radius: 4px;
                }
                .game_title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: block;
                    width: 230px;
                }
                .game_card {
                    padding-top: 15px;
                }
            `}
            </style>

            <Navbar/>

            <div className="flex flex-wrap container mx-auto px-4 justify-items-stretch">
                {loading === true && <h1>Loading...</h1>}
                {todos.map(({ title, id, Thumbnail, currentPrice, productSlug, seller, discount, originalPrice }) => (
                    <div key={id} className='rounded-md pl-2 pr-2 game_card'>
                    <Image
                        src={Thumbnail || '/egs_logo.png'}
                        alt={title}
                        width={250}
                        height={333}
                        layout='responsive'
                        className='w-full rounded-md'
                        />
                    <div className="px-2 py-2">
                        <div className="font-bold text-gray-50 text-base mb-2 game_title">{title}</div>
                        <div className="font-bold text-gray-200 text-sm mb-2 game_title">{seller}</div>
                        <div className="text-gray-200 text-base">
                        {discount > 0 &&
                            <div className="text-gray-500 text-base inline line-through font-sans">
                                {originalPrice}
                            </div>
                        }
                            <div className="text-gray-100 text-base inline"> {currentPrice}</div>
                        </div>
                    </div>
                    <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href={productSlug} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                            Epic Games
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.trackstats.app/api.php')
    const todos = await res.json()
    if (!res) {
        return {
          loading: true,
        }
      }
    console.log("Hi!")
    return {
        props: {
            todos
        },
    }
}

export default Todo