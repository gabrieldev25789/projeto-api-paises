import "./CardPais.css"

function CardPais({ pais }) {
  return (
    <div className="card-pais">
  <div className="card-img-wrap">
    <img src={pais.flags.png} alt={pais.name.common} />
    <span className="card-region">{pais.region}</span>
  </div>
  <div className="card-body">
    <div className="card-name">{pais.name.common}</div>
    <div className="card-details">
      <div className="card-row">
        <span className="card-label">Capital:</span>
        <span className="card-value">{pais.capital?.[0]}</span>
      </div>
      <div className="card-row">
        <span className="card-label">População:</span>
        <span className="card-value">{pais.population.toLocaleString()}</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardPais