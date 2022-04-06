import { rootUrl } from './rootUrl'

export function postRegistration(name, mail, login, password) {
    const url = rootUrl + '/registration'

    let data = {
        username: name,
        login: login,
        mail: mail,
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
            return responseData.message
        })
}