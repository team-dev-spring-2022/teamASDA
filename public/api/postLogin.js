import { rootUrl } from './rootUrl'

export async function postLogin(login, password) {
    const url = rootUrl + '/login'

    let data = {
        login: login,
        password: password
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