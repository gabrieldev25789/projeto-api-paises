import "./Filtros.css"

function Filtros({countries, setAfricaFilter, setAmericaFilter, setAsiaFilter, setEuropeFilter, setOceaniaFilter, setAntarcticFilter}) {

    const africa = () => {
        const resultado = countries.filter((pais) => pais.region === "Africa")
        console.log(resultado)
        setAfricaFilter(true)
    }

    const america = () => {
        const resultado = countries.filter((pais) => pais.region === "Americas")
        console.log(resultado)
        setAmericaFilter(true)
    }

    const asia = () => {
        const resultado = countries.filter((pais) => pais.region === "Asia")
        console.log(resultado)
        setAsiaFilter(true)
    }

    const europe = () => {
        const resultado = countries.filter((pais) => pais.region === "Europe")
        console.log(resultado)
        setEuropeFilter(true)
    }

    const oceania = () => {
        const resultado = countries.filter((pais) => pais.region === "Oceania")
        console.log(resultado)
        setOceaniaFilter(true)
    }

    const antarctic = () => {
        const resultado = countries.filter((pais) => pais.region === "Antarctic")
        console.log(resultado)
        setAntarcticFilter(true)
    }

  return (
    <div className="filters">

      <div className="filter-group">
        <p className="filter-label">Região</p>
        <div className="region-buttons">
          <button className="region-btn active" data-region="">Todas</button>
          <button className="region-btn" onClick={() => africa()} data-region="Africa">África</button>
          <button className="region-btn" onClick={() => america()} data-region="Americas">Américas</button>
          <button className="region-btn" onClick={() => asia()} data-region="Asia">Ásia</button>
          <button className="region-btn" onClick={() => europe()} data-region="Europe">Europa</button>
          <button className="region-btn" onClick={() => oceania()} data-region="Oceania">Oceania</button>
          <button className="region-btn" onClick={() => antarctic()} data-region="Antarctic">Antártica</button>
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