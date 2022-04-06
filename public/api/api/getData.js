import { rootUrl } from './rootUrl'

export function getData() {
    const url = rootUrl + '/info'

    let data = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFiNmQ5ZWNkNzY1MDU2YzIxNDFhYSIsImlhdCI6MTY0Njk2NjUxMCwiZXhwIjoxNjQ3MjI1NzEwfQ.LMOpY5a5G8AZXOdHXvGpM7LVqR02wzaZmDgtOz_hsZ0",
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
                    return data
                }).catch((err) => {
                    console.log(err)
                })
            })
    }
    catch (err) {
        console.log(err)
    }
}