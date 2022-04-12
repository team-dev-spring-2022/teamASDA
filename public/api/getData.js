import { rootUrl } from './rootUrl'

export function getData(token) {
    const url = rootUrl + '/info'

    let data = {
        token: token
    }

    try {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json().then((data) => {
                    return {
                        username: data.username,
                        tasks: data.task
                    }
                }).catch((err) => {
                    console.log(err)
                })
            })
    }
    catch (err) {
        console.log(err)
    }
}