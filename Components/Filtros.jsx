import { useState } from "react"
import "./Filtros.css"

function Filtros({countries, setAfricaFilter, setAmericaFilter, setAsiaFilter, setEuropeFilter, setOceaniaFilter, setAntarcticFilter}) {

    const [active, setActive] = useState("")

    const africa = () => {
        const resultado = countries.filter((pais) => pais.region === "Africa")
        console.log(resultado)
        setAfricaFilter(true)
        setActive("africa")

        const setters = [setAmericaFilter, setAntarcticFilter, setAsiaFilter, setEuropeFilter, setOceaniaFilter]
        setters.forEach((set)=> set(false))
    }

    const america = () => {
        const resultado = countries.filter((pais) => pais.region === "Americas")
        console.log(resultado)
        setAmericaFilter(true)
        setActive("america")

        const setters = [setAfricaFilter, setAntarcticFilter, setAsiaFilter, setEuropeFilter, setOceaniaFilter]
        setters.forEach((set)=> set(false))
    }

    const asia = () => {
        const resultado = countries.filter((pais) => pais.region === "Asia")
        console.log(resultado)
        setAsiaFilter(true)
        setActive("asia")

        const setters = [setAfricaFilter, setAntarcticFilter, setAmericaFilter, setEuropeFilter, setOceaniaFilter]
        setters.forEach((set)=> set(false))
    }

    const europe = () => {
        const resultado = countries.filter((pais) => pais.region === "Europe")
        console.log(resultado)
        setEuropeFilter(true)
        setActive("europe")

        const setters = [setAmericaFilter, setAntarcticFilter, setAsiaFilter, setAfricaFilter, setOceaniaFilter]
        setters.forEach((set)=> set(false))
    }

    const oceania = () => {
        const resultado = countries.filter((pais) => pais.region === "Oceania")
        console.log(resultado)
        setOceaniaFilter(true)
        setActive("oceania")

        const setters = [setAmericaFilter, setAntarcticFilter, setAsiaFilter, setEuropeFilter, setAfricaFilter]
        setters.forEach((set)=> set(false))
    }

    const antarctic = () => {
        const resultado = countries.filter((pais) => pais.region === "Antarctic")
        console.log(resultado)
        setAntarcticFilter(true)
        setActive("antarctic")

        const setters = [setAmericaFilter, setAfricaFilter, setAsiaFilter, setEuropeFilter, setOceaniaFilter]
        setters.forEach((set)=> set(false))
    }

  return (
    <div className="filters">

      <div className="filter-group">
        <p className="filter-label">Região</p>
        <div className="region-buttons">
          <button className="region-btn" data-region="">Todas</button>

          <button className={active === "africa" ? "region-btn active" : "region-btn"} onClick={() => africa()} data-region="Africa">África</button>

          <button className={active === "america" ? "region-btn active" : "region-btn"} onClick={() => america()} data-region="Americas">Américas</button>

          <button className={active === "asia" ? "region-btn active" : "region-btn"} onClick={() => asia()} data-region="Asia">Ásia</button>

          <button className={active === "europe" ? "region-btn active" : "region-btn"} onClick={() => europe()} data-region="Europe">Europa</button>

          <button className={active === "oceania" ? "region-btn active" : "region-btn"} onClick={() => oceania()} data-region="Oceania">Oceania</button>

          <button className={active === "antarctic" ? "region-btn active" : "region-btn"} onClick={() => antarctic()} data-region="Antarctic">Antártica</button>

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

      <button className="clear-btn">Limpar filtros</button>

    </div>
  )
}

export default Filtros