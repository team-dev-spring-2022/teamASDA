import { rootUrl } from './rootUrl'

export async function changeTaskStatus(id) {
    const url = rootUrl + '/taskStatus'

    let data = {
        id: id
    }

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((responseData) => {
            return {
                message: responseData.message
            }
        })
}