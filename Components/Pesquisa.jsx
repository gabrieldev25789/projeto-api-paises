import "./Pesquisa.css"

function Pesquisa({ valor, setValor }) {
  return (
    <section className="pesquisa">
      <div className="pesquisa-container">
        <label htmlFor="input-pais">Pesquisar país</label>
        <div className="row">
          <input
            id="input-pais"
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Digite o nome do país..."
          />
        </div>
      </div>
    </section>
  )
}

export default Pesquisa