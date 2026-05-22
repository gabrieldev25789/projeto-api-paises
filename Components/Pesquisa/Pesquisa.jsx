function Pesquisa() {
  return (
    <section className="pesquisa">
      <div className="pesquisa-container">
        <label htmlFor="input-pais">
          Pesquisar país
        </label>

        <input
          id="input-pais"
          type="text"
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