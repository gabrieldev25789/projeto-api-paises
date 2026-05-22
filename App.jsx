import { useState, useEffect } from "react"
import { getCountries } from "./Services/api"
import Pesquisa from "./Components/Pesquisa"

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries()
        console.log(data)
        setCountries(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>

  return (
    <Pesquisa countries={countries}/>
  )
}

export default App


