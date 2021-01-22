import { useRouter } from 'next/router'
import AppLayout from '../../../components/AppLayout'

export default function loginCallback() {
    const router = useRouter()
    return (
        <AppLayout>
            <p>{router.query}</p>
        </AppLayout>
    )
}