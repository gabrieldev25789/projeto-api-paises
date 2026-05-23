import { useState } from "react"
import "./Filtros.css"

function Filtros({ setRegiao }) {

    const [active, setActive] = useState("")

    function escolherPais(valor) {
        setActive(valor)
        setRegiao(valor)
    }

  return (
    <div className="filters">

      <div className="filter-group">
        <p className="filter-label">Região</p>
        <div className="region-buttons">

          <button className={active === "" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("")}>Todas</button>
          <button className={active === "Africa" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Africa")}>África</button>
          <button className={active === "Americas" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Americas")}>Américas</button>
          <button className={active === "Asia" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Asia")}>Ásia</button>
          <button className={active === "Europe" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Europe")}>Europa</button>
          <button className={active === "Oceania" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Oceania")}>Oceania</button>
          <button className={active === "Antarctic" ? "region-btn active" : "region-btn"} onClick={() => escolherPais("Antarctic")}>Antártica</button>

        </div>
      </div>

      <div className="filter-group">
        <p className="filter-label">População</p>
        <div className="pop-options">
          <label><input type="radio" name="population" value="" defaultChecked /> Qualquer tamanho</label>
          <label><input type="radio" name="population" value="lt1m" /> Menos de 1 milhão</label>
          <label><input type="radio" name="population" value="1m-10m" /> 1 – 10 milhões</label>
          <label><input type="radio" name="population" value="10m-100m" /> 10 – 100 milhões</label>
          <label><input type="radio" name="population" value="gt100m" /> Mais de 100 milhões</label>
        </div>
      </div>

      <button className="clear-btn" onClick={() => escolherPais("")}>Limpar filtros</button>

    </div>
  )
}

export default Filtros