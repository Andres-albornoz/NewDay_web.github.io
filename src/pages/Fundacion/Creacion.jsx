import { useState } from 'react';
import { Arquetipos } from '../../data/Arquetipos';
import { Roles } from '../../data/Roles';
import { Marcas } from '../../data/Marcas';
import { Especialidades as DatosEspecialidades } from '../../data/Especialidades';
import { PersonajeVAcio } from '../../data/personaje';
import { crearPersonaje } from '../../services/crearPersonaje.js';

const BASE = PersonajeVAcio();

// Los hitos disponibles son la reserva de puntos de especialidad.
const MAX_PUNTOS = BASE.puntos.hitos.disponibles;
const NIVEL_MAXIMO = 5;
const CLAVE_ALMACENAMIENTO = 'newday:expedientes';

const TIPOS_MARCA = [
    { id: 'creer', nombre: 'Creer' },
    { id: 'buscar', nombre: 'Buscar' },
    { id: 'conflicto', nombre: 'Conflicto' },
    { id: 'negar', nombre: 'Negar' },
];

const ETIQUETAS_ATRIBUTOS = {
    vida: 'Vida',
    aguante: 'Aguante',
    conexion: 'Conexión',
    espiritu: 'Espíritu',
};

const ETIQUETAS_ESTADISTICAS = {
    Fisico: 'Físico',
    Ingenio: 'Ingenio',
    Lavia: 'Labia',
    'Percepción': 'Percepción',
    Herramientas: 'Herramientas',
};

function capitalizar(texto) {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function crearIdentificador() {
    if (
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
    ) {
        return crypto.randomUUID();
    }

    return `PER_${Date.now()}`;
}

// Lee los expedientes guardados en este navegador. Si el contenido está
// corrupto o el almacenamiento no está disponible, devuelve una lista vacía.
function leerExpedientes() {
    try {
        const datos = JSON.parse(
            window.localStorage.getItem(CLAVE_ALMACENAMIENTO) ?? '[]'
        );

        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

function leerUltimoExpediente() {
    const expedientes = leerExpedientes();
    return expedientes.length > 0
        ? expedientes[expedientes.length - 1]
        : null;
}

function Creacion() {
    // Al abrir la ficha se recupera el último expediente guardado.
    const [expedienteInicial] = useState(() => leerUltimoExpediente());

    const formularioInicial = expedienteInicial?.formulario ?? {};
    const personajeInicial = expedienteInicial?.personaje ?? null;

    const [nombre, setNombre] = useState(
        () => formularioInicial.nombre ?? personajeInicial?.nombre ?? ''
    );
    const [edad, setEdad] = useState(() => {
        const valor = formularioInicial.edad ?? personajeInicial?.edad;
        return valor === undefined || valor === null ? '' : String(valor);
    });
    const [arquetipo, setArquetipo] = useState(
        () => formularioInicial.arquetipo ?? personajeInicial?.arquetipo ?? ''
    );
    const [rol, setRol] = useState(
        () => formularioInicial.rol ?? personajeInicial?.rol ?? ''
    );
    const [marca, setMarca] = useState(() => {
        const valor = formularioInicial.marca ?? personajeInicial?.marcas?.[0];
        return valor ?? '';
    });
    const [especialidades, setEspecialidades] = useState(
        () =>
            expedienteInicial?.especialidades ??
            personajeInicial?.especialidades ??
            {}
    );

    // Identificador estable del borrador: el servicio lo reutiliza en cada
    // actualización para que el folio no cambie mientras se edita la ficha.
    const [idBorrador, setIdBorrador] = useState(
        () => expedienteInicial?.id ?? crearIdentificador()
    );

    const [guardadoEn, setGuardadoEn] = useState(
        () => expedienteInicial?.guardadoEn ?? null
    );

    const [mensajeGuardado, setMensajeGuardado] = useState(() => {
        if (!expedienteInicial) return null;

        return {
            tipo: 'info',
            texto: expedienteInicial.folio
                ? `Borrador ${expedienteInicial.folio} recuperado del archivo local.`
                : 'Borrador recuperado del archivo local.',
        };
    });

    // Busca los objetos seleccionados en el catálogo.
    const arquetipoSeleccionado = Arquetipos.find(
        (elemento) => elemento.id === arquetipo
    );

    const rolSeleccionado = Roles.find(
        (elemento) => elemento.id === rol
    );

    const marcaSeleccionada = Marcas.find(
        (elemento) => elemento.id === marca
    );

    // Calcula los puntos utilizados en especialidades.
    const puntosUsados = Object.values(especialidades)
        .reduce((total, nivel) => total + nivel, 0);

    // El resumen completo se construye con el servicio de creación.
    const personaje = rol
        ? crearPersonaje(
            nombre,
            edad,
            arquetipo,
            rol,
            marca,
            especialidades,
            idBorrador
        )
        : null;

    const atributos = personaje?.atributos ?? BASE.atributos;
    const estadisticas = personaje?.estadisticas ?? BASE.estadisticas;
    const puntos = personaje?.puntos ?? BASE.puntos;
    const hitosInvertidos = puntos.hitos.conseguidos;

    // La reserva de hitos baja a medida que se asignan puntos a especialidades.
    const hitosRestantes = Math.max(
        0,
        puntos.hitos.disponibles - hitosInvertidos
    );

    // Cambia el nivel de una especialidad respetando el máximo por especialidad
    // y el total de puntos disponibles.
    function cambiarNivel(id, nuevoNivel) {
        if (nuevoNivel < 0 || nuevoNivel > NIVEL_MAXIMO) return;

        const especialidadesActualizadas = {
            ...especialidades,
            [id]: nuevoNivel
        };

        const nuevosPuntosUsados = Object.values(
            especialidadesActualizadas
        ).reduce((total, nivel) => total + nivel, 0);

        if (nuevosPuntosUsados > MAX_PUNTOS) return;

        setEspecialidades(especialidadesActualizadas);
    }

    // Selecciona un rol y carga sus especialidades.
    function seleccionarRol(event) {
        const nuevoRol = event.target.value;

        setRol(nuevoRol);

        const rolEncontrado = Roles.find(
            (elemento) => elemento.id === nuevoRol
        );

        if (rolEncontrado) {
            const nuevasEspecialidades = {};

            rolEncontrado.Especialidades.forEach((id) => {
                nuevasEspecialidades[id] = 0;
            });

            setEspecialidades(nuevasEspecialidades);
        } else {
            setEspecialidades({});
        }
    }

    // Iniciales que se muestran en el recuadro de fotografía.
    const iniciales = nombre.trim()
        ? nombre
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((parte) => parte.charAt(0))
            .join('')
            .toUpperCase()
        : '—';

    const fechaRegistro = new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const camposRegistro = [
        { etiqueta: 'Nombre', completo: nombre.trim().length > 0 },
        { etiqueta: 'Edad', completo: edad !== '' && Number(edad) > 0 },
        { etiqueta: 'Arquetipo', completo: Boolean(arquetipo) },
        { etiqueta: 'Rol', completo: Boolean(rol) },
        { etiqueta: 'Marca', completo: Boolean(marca) },
        { etiqueta: 'Especialidades', completo: puntosUsados > 0 },
    ];

    const camposCompletos = camposRegistro.filter(
        (campo) => campo.completo
    ).length;

    const avanceRegistro = Math.round(
        (camposCompletos / camposRegistro.length) * 100
    );

    const avanceAprendizajes = Math.round(
        (puntos.aprendizajes.conseguidos /
            puntos.aprendizajes.disponibles) * 100
    );

    const avanceHitos = Math.round(
        (hitosRestantes / puntos.hitos.disponibles) * 100
    );

    const folio = `ND-ARC-${idBorrador.slice(0, 6).toUpperCase()}`;
    const estadoRegistro = guardadoEn ? 'Guardado' : 'Borrador';

    // Guarda el expediente completo en localStorage, reemplazando el registro
    // previo si se vuelve a guardar el mismo borrador.
    function guardarExpediente() {
        if (!personaje) {
            setMensajeGuardado({
                tipo: 'error',
                texto: 'Seleccione un arquetipo y un rol antes de guardar el expediente.',
            });
            return;
        }

        const ahora = new Date().toISOString();

        const registro = {
            id: idBorrador,
            folio,
            guardadoEn: ahora,
            formulario: {
                nombre: nombre.trim(),
                edad: Number(edad) || 0,
                arquetipo,
                rol,
                marca,
            },
            especialidades,
            hitos: {
                total: MAX_PUNTOS,
                invertidos: hitosInvertidos,
                disponibles: hitosRestantes,
            },
            personaje,
        };

        try {
            const lista = leerExpedientes();
            const indice = lista.findIndex(
                (elemento) => elemento?.id === idBorrador
            );

            if (indice >= 0) {
                lista[indice] = registro;
            } else {
                lista.push(registro);
            }

            window.localStorage.setItem(
                CLAVE_ALMACENAMIENTO,
                JSON.stringify(lista)
            );

            setGuardadoEn(ahora);
            setMensajeGuardado({
                tipo: 'exito',
                texto:
                    hitosRestantes > 0
                        ? `Expediente ${folio} guardado. Hitos restantes: ${hitosRestantes} de ${MAX_PUNTOS}.`
                        : `Expediente ${folio} guardado. No quedan hitos disponibles (0 de ${MAX_PUNTOS}), pero el registro quedó almacenado.`,
            });
        } catch {
            setMensajeGuardado({
                tipo: 'error',
                texto: 'No fue posible guardar el expediente en este navegador.',
            });
        }
    }

    // Abre un expediente en blanco sin borrar los registros ya guardados.
    function nuevoExpediente() {
        setNombre('');
        setEdad('');
        setArquetipo('');
        setRol('');
        setMarca('');
        setEspecialidades({});
        setIdBorrador(crearIdentificador());
        setGuardadoEn(null);
        setMensajeGuardado({
            tipo: 'info',
            texto: 'Expediente nuevo. Complete los campos para registrarlo.',
        });
    }

    return (
        <>
            <article className="expediente">
                <header className="expediente__cabecera">
                    <div className="expediente__institucion">
                        <span className="expediente__escudo" aria-hidden="true">
                            ND
                        </span>

                        <div>
                            <p className="expediente__organismo">
                                Fundación NewDay
                            </p>
                            <p className="expediente__dependencia">
                                Registro de Marcados · Archivo Central
                            </p>
                        </div>
                    </div>

                    <div className="expediente__folio">
                        <p>
                            <span>Folio</span>
                            <strong>{folio}</strong>
                        </p>
                        <p>
                            <span>Clasificación</span>
                            <strong>Reservado</strong>
                        </p>
                        <p>
                            <span>Estado</span>
                            <strong>{estadoRegistro}</strong>
                        </p>
                    </div>
                </header>

                <div className="expediente__titulo">
                    <p className="expediente__sello">Formato FR-01</p>
                    <h1>Ficha de registro de marcado</h1>
                    <p>
                        Complete los campos para conformar el expediente
                        provisional del individuo. Toda la información consignada
                        queda sujeta a revisión por el Archivo Central.
                    </p>
                </div>

                <form
                    className="expediente__cuerpo"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <section className="expediente__seccion">
                        <h2>
                            <span>I</span>
                            Datos del marcado
                        </h2>

                        <div className="expediente__ficha">
                            <div className="expediente__campos">
                                <label className="campo">
                                    <span className="campo__etiqueta">
                                        Nombre completo
                                    </span>
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(event) =>
                                            setNombre(event.target.value)
                                        }
                                        placeholder="Nombre y apellidos"
                                        autoComplete="off"
                                    />
                                </label>

                                <label className="campo campo--edad">
                                    <span className="campo__etiqueta">Edad</span>
                                    <input
                                        type="number"
                                        min="0"
                                        max="120"
                                        value={edad}
                                        onChange={(event) =>
                                            setEdad(event.target.value)
                                        }
                                        placeholder="Años"
                                    />
                                </label>

                                <div className="campo campo--lectura">
                                    <span className="campo__etiqueta">
                                        Dependencia
                                    </span>
                                    <p className="campo__valor">
                                        Registro de Marcados
                                    </p>
                                </div>

                                <div className="campo campo--lectura">
                                    <span className="campo__etiqueta">
                                        Fecha de apertura
                                    </span>
                                    <p className="campo__valor">{fechaRegistro}</p>
                                </div>
                            </div>

                            <div className="expediente__foto">
                                <span className="campo__etiqueta">
                                    Fotografía
                                </span>
                                <div className="foto">
                                    <span className="foto__iniciales">
                                        {iniciales}
                                    </span>
                                    <span className="foto__leyenda">
                                        Sin imagen
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="expediente__seccion">
                        <h2>
                            <span>II</span>
                            Clasificación
                        </h2>

                        <div className="expediente__clasificacion">
                            <label className="campo">
                                <span className="campo__etiqueta">
                                    Arquetipo
                                </span>
                                <select
                                    value={arquetipo}
                                    onChange={(event) => {
                                        setArquetipo(event.target.value);
                                        setRol('');
                                        setEspecialidades({});
                                    }}
                                >
                                    <option value="">
                                        Selecciona un arquetipo
                                    </option>

                                    {Arquetipos.map((elemento) => (
                                        <option
                                            key={elemento.id}
                                            value={elemento.id}
                                        >
                                            {elemento.nombre}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="campo">
                                <span className="campo__etiqueta">Rol</span>
                                <select
                                    value={rol}
                                    onChange={seleccionarRol}
                                    disabled={!arquetipo}
                                >
                                    <option value="">
                                        {arquetipo
                                            ? 'Selecciona un rol'
                                            : 'Primero seleccione un arquetipo'}
                                    </option>

                                    {Roles
                                        .filter(
                                            (elemento) =>
                                                elemento.id_ARQ === arquetipo
                                        )
                                        .map((elemento) => (
                                            <option
                                                key={elemento.id}
                                                value={elemento.id}
                                            >
                                                {elemento.nombre}
                                            </option>
                                        ))}
                                </select>
                            </label>

                            <label className="campo">
                                <span className="campo__etiqueta">Marca</span>
                                <select
                                    value={marca}
                                    onChange={(event) =>
                                        setMarca(event.target.value)
                                    }
                                >
                                    <option value="">
                                        Selecciona una marca
                                    </option>

                                    {TIPOS_MARCA.map((tipo) => {
                                        const marcasDelTipo = Marcas.filter(
                                            (elemento) =>
                                                elemento.tipo_p === tipo.id
                                        );

                                        if (marcasDelTipo.length === 0) {
                                            return null;
                                        }

                                        return (
                                            <optgroup
                                                key={tipo.id}
                                                label={tipo.nombre}
                                            >
                                                {marcasDelTipo.map(
                                                    (elemento) => (
                                                        <option
                                                            key={elemento.id}
                                                            value={elemento.id}
                                                        >
                                                            {capitalizar(
                                                                elemento.nombre
                                                            )}
                                                        </option>
                                                    )
                                                )}
                                            </optgroup>
                                        );
                                    })}
                                </select>
                            </label>
                        </div>

                        <div className="expediente__detalle">
                            <div>
                                <h3>Arquetipo declarado</h3>
                                <p>
                                    {arquetipoSeleccionado
                                        ? arquetipoSeleccionado.descripcion
                                        : 'Pendiente de selección.'}
                                </p>
                            </div>

                            <div>
                                <h3>Perfil del rol</h3>
                                <p>
                                    {rolSeleccionado
                                        ? rolSeleccionado.descripcion_d
                                        : 'Pendiente de selección.'}
                                </p>
                            </div>

                            <div>
                                <h3>Marca registrada</h3>
                                <p>
                                    {marcaSeleccionada
                                        ? marcaSeleccionada.descripcion
                                        : 'Pendiente de selección.'}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="expediente__seccion">
                        <div className="expediente__seccion-cabecera">
                            <h2>
                                <span>III</span>
                                Especialidades
                            </h2>

                            <p className="puntos">
                                <span>Hitos disponibles</span>
                                <strong>
                                    {hitosRestantes} / {MAX_PUNTOS}
                                </strong>
                            </p>
                        </div>

                        <div
                            className="medidor medidor--puntos"
                            role="progressbar"
                            aria-label="Hitos disponibles en el expediente"
                            aria-valuemin="0"
                            aria-valuemax={MAX_PUNTOS}
                            aria-valuenow={hitosRestantes}
                        >
                            <span
                                style={{
                                    width: `${(hitosRestantes / MAX_PUNTOS) * 100}%`
                                }}
                            />
                        </div>

                        <p className="expediente__nota">
                            El expediente dispone de {MAX_PUNTOS} hitos. Cada
                            punto asignado a una especialidad consume un hito y
                            reduce la reserva.
                        </p>

                        {Object.keys(especialidades).length > 0 ? (
                            <ul className="especialidades">
                                {Object.entries(especialidades).map(
                                    ([id, nivel]) => {
                                        const datosEspecialidad =
                                            DatosEspecialidades.find(
                                                (elemento) =>
                                                    elemento.id === id
                                            );

                                        const nombreEspecialidad =
                                            datosEspecialidad?.nombre ??
                                            'Especialidad sin catalogar';

                                        return (
                                            <li className="especialidad" key={id}>
                                                <div className="especialidad__datos">
                                                    <div className="especialidad__linea">
                                                        <strong>
                                                            {nombreEspecialidad}
                                                        </strong>
                                                        <code>{id}</code>
                                                    </div>
                                                    <p>
                                                        {datosEspecialidad
                                                            ?.descripcion_i ??
                                                            'Sin descripción disponible en el catálogo.'}
                                                    </p>
                                                </div>

                                                <div className="especialidad__control">
                                                    <div
                                                        className="especialidad__pips"
                                                        aria-hidden="true"
                                                    >
                                                        {[1, 2, 3, 4, 5].map(
                                                            (posicion) => (
                                                                <span
                                                                    key={
                                                                        posicion
                                                                    }
                                                                    className={
                                                                        posicion <=
                                                                        nivel
                                                                            ? 'is-on'
                                                                            : ''
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>

                                                    <div className="especialidad__botones">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                cambiarNivel(
                                                                    id,
                                                                    nivel - 1
                                                                )
                                                            }
                                                            disabled={nivel <= 0}
                                                            aria-label={`Reducir nivel de ${nombreEspecialidad}`}
                                                        >
                                                            −
                                                        </button>

                                                        <output>{nivel}</output>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                cambiarNivel(
                                                                    id,
                                                                    nivel + 1
                                                                )
                                                            }
                                                            disabled={
                                                                nivel >=
                                                                    NIVEL_MAXIMO ||
                                                                puntosUsados >=
                                                                    MAX_PUNTOS
                                                            }
                                                            aria-label={`Aumentar nivel de ${nombreEspecialidad}`}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        ) : (
                            <p className="expediente__vacio">
                                Seleccione un arquetipo y un rol para cargar sus
                                especialidades disponibles.
                            </p>
                        )}
                    </section>
                </form>

                <footer className="expediente__pie">
                    <div className="expediente__avance">
                        <span>Avance del registro</span>
                        <div
                            className="medidor"
                            role="progressbar"
                            aria-label="Avance del registro"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={avanceRegistro}
                        >
                            <span style={{ width: `${avanceRegistro}%` }} />
                        </div>
                        <strong>
                            {camposCompletos} de {camposRegistro.length} campos
                            completados
                        </strong>
                    </div>

                    <div className="expediente__firma">
                        Firma del investigador
                    </div>

                    <div className="expediente__fecha">
                        <span>Fecha de apertura</span>
                        <strong>{fechaRegistro}</strong>
                    </div>
                </footer>

                <div className="expediente__acciones">
                    <div className="expediente__acciones-texto">
                        <span>Archivo local del navegador</span>
                        <p>
                            Guarda el perfil, las especialidades y la reserva de
                            hitos en <code>localStorage</code>. Al abrir la
                            ficha se recupera el último expediente guardado.
                        </p>
                    </div>

                    <div className="expediente__acciones-botones">
                        <button
                            type="button"
                            className="expediente__nuevo"
                            onClick={nuevoExpediente}
                        >
                            Nuevo expediente
                        </button>

                        <button
                            type="button"
                            className="expediente__guardar"
                            onClick={guardarExpediente}
                        >
                            Guardar expediente
                        </button>
                    </div>
                </div>

                {mensajeGuardado ? (
                    <p
                        className={`expediente__mensaje expediente__mensaje--${mensajeGuardado.tipo}`}
                        role="status"
                    >
                        {mensajeGuardado.texto}
                    </p>
                ) : null}
            </article>

            <section className="resumen" aria-labelledby="resumen-titulo">
                <header className="resumen__cabecera">
                    <div>
                        <p className="resumen__etiqueta">Anexo FR-01/A</p>
                        <h2 id="resumen-titulo">Estadísticas y estado</h2>
                    </div>

                    <span className="resumen__sello">
                        {personaje
                            ? 'Perfil generado'
                            : 'Sin rol asignado'}
                    </span>
                </header>

                <div className="resumen__grid">
                    <article className="panel panel--ancho">
                        <h3>Atributos</h3>

                        <p className="panel__nota">
                            Escala de 5 secciones por atributo. La caja lateral
                            registra las alteraciones de cada uno.
                        </p>

                        <ul className="atributos">
                            {Object.entries(atributos).map(
                                ([clave, atributo]) => {
                                    const nombreAtributo =
                                        ETIQUETAS_ATRIBUTOS[clave] ??
                                        capitalizar(clave);

                                    const valor = Math.max(
                                        0,
                                        Math.min(
                                            5,
                                            Number(atributo.valor) || 0
                                        )
                                    );

                                    const alteracion =
                                        atributo.estado &&
                                        atributo.estado !== '/'
                                            ? atributo.estado
                                            : 'Sin alteraciones';

                                    return (
                                        <li className="atributo" key={clave}>
                                            <div className="atributo__nombre">
                                                <span>{nombreAtributo}</span>
                                                <strong>
                                                    {atributo.valor}
                                                </strong>
                                            </div>

                                            <div
                                                className="atributo__barra"
                                                role="progressbar"
                                                aria-label={`${nombreAtributo} de 5`}
                                                aria-valuemin="0"
                                                aria-valuemax="5"
                                                aria-valuenow={valor}
                                            >
                                                {[1, 2, 3, 4, 5].map(
                                                    (seccion) => (
                                                        <span
                                                            key={seccion}
                                                            className={
                                                                seccion <= valor
                                                                    ? 'is-on'
                                                                    : ''
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>

                                            <div
                                                className={`atributo__alteracion${
                                                    alteracion !==
                                                    'Sin alteraciones'
                                                        ? ' is-alterado'
                                                        : ''
                                                }`}
                                            >
                                                <span>Alteraciones</span>
                                                <strong>{alteracion}</strong>
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </article>

                    <article className="panel panel--ancho">
                        <h3>Estadísticas del rol</h3>

                        {rolSeleccionado ? (
                            <ul className="estadisticas">
                                {Object.entries(estadisticas).map(
                                    ([nombreEstadistica, valor]) => (
                                        <li key={nombreEstadistica}>
                                            <span>
                                                {ETIQUETAS_ESTADISTICAS[
                                                    nombreEstadistica
                                                ] ?? nombreEstadistica}
                                            </span>
                                            <strong>{valor}</strong>
                                            <em>Base del rol</em>
                                        </li>
                                    )
                                )}
                            </ul>
                        ) : (
                            <p className="panel__vacio">
                                Las estadísticas se calculan al seleccionar un
                                rol.
                            </p>
                        )}
                    </article>

                    <article className="panel">
                        <h3>Estado de las marcas</h3>

                        <p className="estado-marca">
                            <span className="chip">
                                {capitalizar(
                                    personaje?.estado_marcas ??
                                        BASE.estado_marcas
                                )}
                            </span>
                            <span className="chip chip--gold">
                                {marcaSeleccionada
                                    ? capitalizar(marcaSeleccionada.tipo_p)
                                    : 'Sin marca'}
                            </span>
                        </p>

                        {marcaSeleccionada ? (
                            <div className="marca-resumen">
                                <h4>
                                    {capitalizar(marcaSeleccionada.nombre)}
                                </h4>
                                <p className="marca-resumen__meta">
                                    {capitalizar(marcaSeleccionada.tipo_p)} ·{' '}
                                    {marcaSeleccionada.tipo_s}
                                </p>
                                <p>{marcaSeleccionada.descripcion}</p>
                            </div>
                        ) : (
                            <p className="panel__vacio">
                                Ninguna marca ha sido asignada al expediente.
                            </p>
                        )}
                    </article>

                    <article className="panel">
                        <h3>Progreso del expediente</h3>

                        <p className="historias">
                            <span>Historias registradas</span>
                            <strong>{puntos.historias}</strong>
                        </p>

                        <ul className="progreso">
                            <li>
                                <div className="progreso__linea">
                                    <span>Aprendizajes</span>
                                    <strong>
                                        {puntos.aprendizajes.conseguidos} /{' '}
                                        {puntos.aprendizajes.disponibles}
                                    </strong>
                                </div>
                                <div className="medidor">
                                    <span
                                        style={{
                                            width: `${avanceAprendizajes}%`
                                        }}
                                    />
                                </div>
                            </li>

                            <li>
                                <div className="progreso__linea">
                                    <span>Hitos disponibles</span>
                                    <strong>
                                        {hitosRestantes} /{' '}
                                        {puntos.hitos.disponibles}
                                    </strong>
                                </div>
                                <div className="medidor">
                                    <span style={{ width: `${avanceHitos}%` }} />
                                </div>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Creacion;
