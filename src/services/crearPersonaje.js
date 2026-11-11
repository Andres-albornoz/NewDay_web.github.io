import { Roles } from '../data/Roles.js';
import { PersonajeVAcio } from '../data/personaje.js';

const NIVEL_MAXIMO = 5;

/**
 * Construye el objeto de personaje a partir de los datos del formulario.
 * Las especialidades se normalizan contra las que pertenecen al rol y los
 * hitos conseguidos equivalen a los puntos invertidos en especialidades.
 */
export function crearPersonaje(
    nombre = '',
    edad = 0,
    arquetipo = '',
    rol = '',
    marca = '',
    especialidades = {},
    id = null
) {
    const datosRol = Roles.find((elemento) => elemento.id === rol);

    if (!datosRol) {
        console.error('El rol seleccionado no existe');
        return null;
    }

    const base = PersonajeVAcio();
    const especialidadesPersonaje = {};

    (datosRol.Especialidades ?? []).forEach((idEspecialidad) => {
        const nivel = Number(especialidades[idEspecialidad] ?? 0);

        especialidadesPersonaje[idEspecialidad] = Number.isFinite(nivel)
            ? Math.min(NIVEL_MAXIMO, Math.max(0, nivel))
            : 0;
    });

    const hitosInvertidos = Object.values(especialidadesPersonaje)
        .reduce((total, nivel) => total + nivel, 0);

    const identificador = id ?? (
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `PER_${Date.now()}`
    );

    return {
        ...base,

        id: identificador,
        nombre: String(nombre).trim(),
        edad: Number(edad) || 0,

        arquetipo,
        rol,
        estado_marcas: base.estado_marcas,
        marcas: marca ? [marca] : [],

        especialidades: especialidadesPersonaje,

        estadisticas: {
            ...datosRol.estadisticas
        },

        puntos: {
            ...base.puntos,
            historias: 1,
            hitos: {
                ...base.puntos.hitos,
                conseguidos: hitosInvertidos
            }
        }
    };
}
