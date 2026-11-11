import { useState } from 'react';

function HomeFundacion() {
  const [search, setSearch] = useState("");
    return (
        <>
            <section>
                <p>bienvenido investigador [redactado]</p>
                <div className="encabezado">
                    Registro e informe formal de los marcados
                </div>

                <br />
                <label htmlFor="buscarPersonaje">buscar marcado/s:</label>
                <input type="text" id="IMC" placeholder="buscar arcivo o ficha de un marcado por nombre, IMC, arquetipo, rol o historias "></input>
                <br />

                <label className="search-box">
                    <span aria-hidden="true">⌕</span>
                    <input
                        value={search} 
                        onChange={(event) => setSearch(event.target.value)}
                        id="IMC" 
                        placeholder="buscar arcivo o ficha de un marcado por nombre, IMC, arquetipo, rol o historias"
                    />
                </label>
                
                
                
            </section>
        </>
    )
}
export default HomeFundacion;

/*
<div className="toolbar panel">
                  <label className="search-box">
                    <span aria-hidden="true">⌕</span>
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Buscar por nombre, jugador o arquetipo..."
                    />
                  </label>
                  <span className="muted">
                    {filteredCharacters.length} expediente(s)
                  </span>
                </div>
*/