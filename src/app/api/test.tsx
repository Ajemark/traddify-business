"use server"

import { KEY, TRADIFYAPITOKEN } from "@/Constants";


export const call = () => {
    fetch('https://api.letsdeel.com/rest/v1/candidates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TRADIFYAPITOKEN}`,
            'x-client-id': `${KEY}`
        },
        body: JSON.stringify({
            'data': {
                'id': 'dhzj64mgen',
                'first_name': 'Taylor',
                'last_name': 'Swift',
                'status': 'offer-accepted',
                'link': 'https://your-ats.com/path/to/candidate/dhzj64mgen',
                'email': 'taylor@swift.com'
            }
        })
    }).then(res => console.log(res))
}