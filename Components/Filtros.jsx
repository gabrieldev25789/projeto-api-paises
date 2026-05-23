import "./Filtros.css"

function Filtros() {
  return (
    <div className="filters">

      <div className="filter-group">
        <p className="filter-label">Região</p>
        <div className="region-buttons">
          <button className="region-btn active" data-region="">Todas</button>
          <button className="region-btn" data-region="Africa">África</button>
          <button className="region-btn" data-region="Americas">Américas</button>
          <button className="region-btn" data-region="Asia">Ásia</button>
          <button className="region-btn" data-region="Europe">Europa</button>
          <button className="region-btn" data-region="Oceania">Oceania</button>
          <button className="region-btn" data-region="Antarctic">Antártica</button>
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