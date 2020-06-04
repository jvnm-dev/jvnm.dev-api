export const fetchGet = async (url) => {
  const response = await fetch(url)
  return response.json()
}
