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

  const [maiorUmMi, setMaiorUmMi] = useState(false)
  const [maiorDezMi, setMaiorDezMi] = useState(false)
  const [maiorCemMi, setMaiorCemMi] = useState(false)
  const [menorUmMi, setMenorUmMi] = useState(false)
  const [qualquerTamanho, setQualquerTamanho] = useState(false)

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
      const porPopQualquer = !qualquerTamanho || (pais.population)
      const porPopMaiorUmMi = !maiorUmMi || (pais.population >= 1_000_000 && pais.population < 10_000_000)
      const porPopMaiorDezMi = !maiorDezMi || (pais.population >= 10_000_000 && pais.population < 100_000_000)
      const porPopMaiorCemMi = !maiorCemMi || (pais.population > 100_000_000)
      const popMenorUmMi = !menorUmMi || (pais.population < 1_000_000)

      return porRegiao && porNome && porPopMaiorUmMi && porPopMaiorDezMi && porPopMaiorCemMi && popMenorUmMi && porPopQualquer
    })

  return (
    <>
      <Pesquisa valor={valor} setValor={setValor} />
      <Filtros 
      setRegiao={setRegiao} 
      countries={countries} 
      setMaiorUmMi={setMaiorUmMi}
      setMaiorDezMi={setMaiorDezMi}
      setMaiorCemMi={setMaiorCemMi}
      setMenorUmMi={setMenorUmMi}
      setQualquerTamanho={setQualquerTamanho}/>

    <div className="cards-grid">
      {paisesFiltrados.map((pais) => (
        <CardPais key={pais.name.common} pais={pais} />
      ))}
    </div>
    </>
  )
}

export default App