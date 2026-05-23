import { useState, useEffect } from "react"
import { getCountries } from "./Services/api"
import Pesquisa from "./Components/Pesquisa"
import Filtros from "./Components/Filtros"

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [valor, setValor] = useState("")

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries()
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

  const paisesFiltrados = countries.filter((pais) =>
    pais.name.common.toLowerCase().includes(valor.toLowerCase())
  )

  return (
    <>
      <Pesquisa valor={valor} setValor={setValor} />
      <Filtros />

      {valor && paisesFiltrados.map((pais)=> (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
            <img src={pais.flags.png} alt="" />
        </div>
      ))}
    </>
  )
}

export default App


