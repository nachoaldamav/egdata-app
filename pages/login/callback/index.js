import { useRouter } from 'next/router'
import AppLayout from '../../../components/AppLayout'
import axios from 'axios'

export default function loginCallback() {
    const router = useRouter()
    let callbackCode = router.query.code
    const bodyFormData = {
        grant_type: 'authorization_code',
        deployement_id: 'c1472b0ba8e14f87871a304e98b735ef',
        scope: 'basic_profile',
        code: callbackCode,
        redirect_uri: 'https://egdata.app/'
    }
    axios({
        method: 'post',
        url: 'https://api.epicgames.dev/epic/oauth/v1/token',
        data: bodyFormData,
        config: { headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic eHl6YTc4OTFsY29wWnJ0ZnR4WmJ3b1NZckx0UWlOTno6VXdsQSszQTJkS2FBcHNmUGNwWkhhSlZUMXNDb09HQ1VPWW1HbHFYaWRMbw=='
          }}
    })
    .then((response) => {console.log(response)}) 
    .catch(error => {console.log( 'the error has occured: ' + error), console.log(bodyFormData) })

    return (
        <AppLayout>
            <p>Hola</p>
        </AppLayout>
    )
}

