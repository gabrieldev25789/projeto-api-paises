import { useState } from "react"

function Pesquisa({countries}) {
  const [valor, setValor] = useState("")


  console.log(countries)
  countries.forEach((pais)=>{
    const nome = pais.name.common
    console.log(nome)
  })

return (
    <section className="pesquisa">
      <div className="pesquisa-container">
        <label htmlFor="input-pais">
          Pesquisar país
        </label>

        <input
          id="input-pais"
          type="text"
          value={valor}
          onChange={(e)=> setValor(e.target.value)}
          placeholder="Digite o nome do país..."
        />

        <button>
          Pesquisar
        </button>
      </div>
    </section>
  )
}

export default Pesquisa