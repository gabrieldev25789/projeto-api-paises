import { useState, useEffect } from "react"
import { getCountries } from "./Services/api"
import Pesquisa from "./Components/Pesquisa"
import Filtros from "./Components/Filtros"
import CardPais from "./Components/CardPais"

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [valor, setValor] = useState("")
  const [regiao, setRegiao] = useState("")

  const [populacao, setPopulacao] = useState("")

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

      const paisesFiltrados = countries.filter((pais) => {
      const porRegiao = pais.region.includes(regiao)
      const porNome = pais.name.common.toLowerCase().includes(valor.toLowerCase())
      const porPop =
        populacao === "" ||
        (populacao === "lt1m"     && pais.population < 1_000_000) ||
        (populacao === "1m-10m"   && pais.population >= 1_000_000  && pais.population < 10_000_000) ||
        (populacao === "10m-100m" && pais.population >= 10_000_000 && pais.population < 100_000_000) ||
        (populacao === "gt100m"   && pais.population >= 100_000_000)

        return porRegiao && porNome && porPop
      })


return (
    <>
      <Pesquisa valor={valor} setValor={setValor} />
      <Filtros 
      setRegiao={setRegiao} 
      countries={countries} 
      setPopulacao={setPopulacao}
      />

    {paisesFiltrados.length === 0 && (
     <h2>Nenhuma país encontrado</h2>)
    }

    <div className="cards-grid">
    {paisesFiltrados.map((pais) => (
      <CardPais key={pais.name.common} pais={pais} />
    ))}
    </div>
    </>
  )
}

export default App