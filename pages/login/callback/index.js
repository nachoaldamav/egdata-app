import { useRouter } from 'next/router'
import AppLayout from '../../../components/AppLayout'
import axios from 'axios'

export function useToken() {
    const router = useRouter()
    let callbackCode = router.query.code

    let loading = true

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
        return response.data;
    })
    .catch(error => {console.log( 'the error has occured: ' + error)});

    console.log(getToken.access_token);

    return getToken.access_token
}

export default function loginCallback({ getToken }) {

    const token = {getToken}

    const config2 = {
        headers: {
          'Authorization': 'Bearer ' + token.access_token
        }
    };

    const userInfo = axios.get('https://api.epicgames.dev/epic/oauth/v1/userInfo', config2)
    .then((response) => {
        console.log('Welcome ' + response.preferred_username);
        return response
    });

    return (
        <AppLayout>
            <p>Hello</p>
        </AppLayout>
    )
}

