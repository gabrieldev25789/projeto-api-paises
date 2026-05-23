import { useState, useEffect } from "react"
import { getCountries } from "./Services/api"
import Pesquisa from "./Components/Pesquisa"
import Filtros from "./Components/Filtros"

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [valor, setValor] = useState("")

  const [africaFilter, setAfricaFilter] = useState(false)
  const [americaFilter, setAmericaFilter] = useState(false)
  const [asiaFilter, setAsiaFilter] = useState(false)
  const [europeFilter, setEuropeFilter] = useState(false)
  const [oceaniaFilter, setOceaniaFilter] = useState(false)
  const [antarcticFilter, setAntarcticFilter] = useState(false)

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

  const africaFilterPaises = countries.filter((pais) => pais.region === "Africa")
  const americaFilterPaises = countries.filter((pais) => pais.region === "Americas")
  const asiaFilterPaises = countries.filter((pais) => pais.region === "Asia")
  const europeFilterPaises = countries.filter((pais) => pais.region === "Europe")
  const oceaniaFilterPaises = countries.filter((pais) => pais.region === "Oceania")
  const antarcticFilterPaises = countries.filter((pais) => pais.region === "Antarctic")

  return (
    <>
      <Pesquisa valor={valor} setValor={setValor} />
      <Filtros
        countries={countries}
        valor={valor}
        setAfricaFilter={setAfricaFilter}
        setAmericaFilter={setAmericaFilter}
        setAsiaFilter={setAsiaFilter}
        setEuropeFilter={setEuropeFilter}
        setOceaniaFilter={setOceaniaFilter}
        setAntarcticFilter={setAntarcticFilter}
      />

      {valor && paisesFiltrados.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {africaFilter && africaFilterPaises.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {americaFilter && americaFilterPaises.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {asiaFilter && asiaFilterPaises.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {europeFilter && europeFilterPaises.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {oceaniaFilter && oceaniaFilterPaises.map((pais) => (
        <div>
          <ul>
            <li key={pais.name.common}>{pais.name.common}</li>
          </ul>
          <img src={pais.flags.png} alt="" />
        </div>
      ))}

      {antarcticFilter && antarcticFilterPaises.map((pais) => (
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


