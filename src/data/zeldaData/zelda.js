
export default async function bringZelda (url) {
  const response = await fetch(url)
  return await response.json()
}