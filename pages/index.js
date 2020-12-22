import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'

let EGS_Url = "https://epicgames.com/store/product/"

const Todo = ({ todos }) => {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Todo Page</title>
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
            `}
            </style>

            <Navbar/>

            <div className="flex flex-wrap container px-4">
                {todos.map(({ title, id, Thumbnail, currentPrice, productSlug, seller }) => (
                    <div key={id} className='rounded-md pl-2 pr-2'>
                    <Image
                        src={Thumbnail || '/egs_logo.png'}
                        alt={title}
                        width={250}
                        height={333}
                        className='w-full rounded-md'
                        />
                    <div className="px-2 py-2">
                        <div className="font-bold text-gray-50 text-base mb-2 game_title">{title}</div>
                        <div className="font-bold text-gray-200 text-sm mb-2 game_title">{seller}</div>
                        <p className="text-gray-200 text-base">
                            {currentPrice}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a target="_blank" href={productSlug}>
                            <button className="btn btn-blue btn-blue:hover">Epic Games Store</button>
                        </a>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://egs-data.herokuapp.com/api.php')
    const todos = await res.json()
    console.log("Hi!")
    return {
        props: {
            todos
        },
    }
}

export default Todo