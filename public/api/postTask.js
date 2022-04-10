import { rootUrl } from './rootUrl'

export async function postTask(content, date, token) {
    const url = rootUrl + '/createTask'

    let data = {
        content: content,
        date: date,
        token: token
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
                message: responseData.message,
                token: responseData.token
            }
        })
}