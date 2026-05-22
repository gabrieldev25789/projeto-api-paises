import { useState } from "react"
import "./Pesquisa.css"

function Pesquisa({countries}) {
  const [valor, setValor] = useState("")

function pesquisaPaises(){
  if(valor){
  countries.forEach((pais)=>{
    const nome = pais.name.common
    console.log(nome)
  })
} else{
  alert("Digite um valor")
}
}

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
          <button onClick={() => pesquisaPaises()}>Pesquisar</button>
        </div>
      </div>
    </section>
  )
}

export default Pesquisa