export const fetchGet = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export const fetchPost = async (url, data, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  if (token) {
    headers['Authorization'] = `Token ${token}`
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    mode: 'cors',
    body: JSON.stringify(data)
  })

  return response.json()
}
