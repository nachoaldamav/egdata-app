import { useRouter } from 'next/router'
import AppLayout from '../../../components/AppLayout'
import axios from 'axios'

export default function loginCallback() {
    const router = useRouter()
    let callbackCode = router.query.code

    const params = new URLSearchParams()

    params.append('grant_type', 'authorization_code')
    params.append('deployment_id', 'c1472b0ba8e14f87871a304e98b735ef')
    params.append('scope', 'basic_profile')
    params.append('code', callbackCode)
    params.append('redirect_uri', 'https://egdata.app/login/callback')
    
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic eHl6YTc4OTFsY29wWnJ0ZnR4WmJ3b1NZckx0UWlOTno6VXdsQSszQTJkS2FBcHNmUGNwWkhhSlZUMXNDb09HQ1VPWW1HbHFYaWRMbw=='
        }
    }

    const url = 'https://api.epicgames.dev/epic/oauth/v1/token'

    const getToken = axios.post(url, params, config)
    .then((response) => {
        console.log(response.data);
        return response.data
    }) 
    .catch(error => {console.log( 'the error has occured: ' + error)})

    return (
        <AppLayout>
            <p>Hello</p>
        </AppLayout>
    )
}


