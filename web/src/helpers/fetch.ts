export const fetchGet = async (url: string) => {
    const response = await fetch(url)
    return response.json()
}

export const fetchPost = async (url: string, data: any, token?: string) => {
    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    if (token) {
        headers.append('Authorization', `Token ${token}`)
    }

    const response = await fetch(url, {
        method: 'POST',
        headers,
        mode: 'cors',
        body: JSON.stringify(data)
    })

    return response.json()
}