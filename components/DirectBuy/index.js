import Link from "next/link";

export default function DirectBuy({ children, customAttributes, id }) {
    const image = customAttributes.find(images => images.type === 'productHome')
    const {type, namespace} = image

    return (
        <Link href={`https://www.epicgames.com/store/purchase?namespace=${id}&showNavigation=true&highlightColor=0078f2&offers=${namespace}#/purchase/verify?_k=mshm8g`}>
            <a target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700">
                {children}
            </a>
        </Link>
    )
}