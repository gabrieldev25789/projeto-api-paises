import "./CardPais.css"

function CardPais({ pais }) {
  return (
    <div className="card-pais">
      <img src={pais.flags.png} alt={`Bandeira de ${pais.name.common}`} />
      <ul>
        <li>{pais.name.common}</li>
        <li>{pais.capital?.[0]}</li>
        <li>{pais.population.toLocaleString()}</li>
        <li>{pais.region}</li>
      </ul>
    </div>
  )
}

export default CardPais