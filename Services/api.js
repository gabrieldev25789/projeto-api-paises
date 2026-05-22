const BASE_URL = 'https://restcountries.com/v3.1'

export async function getCountries() {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital`
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar países')
  }

  const data = await res.json()

  return data
}