import { useState } from "react"
import "./Pesquisa.css"

function Pesquisa({countries}) {
  const [valor, setValor] = useState("")

  console.log(countries)
  countries.forEach((pais)=>{
    const nome = pais.name.common
    console.log(nome)
  })

  return (
   <section class="pesquisa">
      <div class="pesquisa-container">
        <label for="input-pais">Pesquisar país</label>
        <div class="row">
          <input
            id="input-pais"
            type="text"
            value={valor}
            onChange={(e)=> setValor(e.target.value)}
            placeholder="Digite o nome do país..."
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </section>
  )
}

export default Pesquisa