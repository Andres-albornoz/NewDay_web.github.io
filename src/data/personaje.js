export const PersonajeVAcio = () => ({
    id: null,

    // Información básica
    nombre: '',
    edad: 0,

    // Configuración
    arquetipo: 'ARQ_01',
    rol: 'ROL_In_01',

    // Marcas
    estado_marcas: 'despierta',
    marcas: [
        'MAR_Ce_01'
    ],

    // Especialidades
    especialidades: {
        'ESP_San_01': 0,
        'ESP_San_02': 0,
        'ESP_San_03': 0,
        'ESP_San_04': 0,
        'ESP_San_05': 0,
        'ESP_San_06': 0
    },

    // Atributos
    atributos: {
        vida: { valor: 5, estado: '/' },
        aguante: { valor: 5, estado: '/' },
        conexion: { valor: 3, estado: '/' },
        espiritu: { valor: 3, estado: '/' }
    },

    estadisticas: {
        Fisico: 0, 
        Ingenio: 0, 
        Lavia: 0, 
        Percepción: 0, 
        Herramientas: 0
    },

    // Conocimientos básicos
    conocimientos_basicos: {},

    // Progresión
    puntos: {
        historias: 0,
        aprendizajes: {
            disponibles: 20,
            conseguidos: 0
        },
        hitos: {
            disponibles: 15,
            conseguidos: 0
        }
    },

    // Inventario
    inventario: {}
});

export const PersonajeEjemplo = {
    id: 'PER_0E',

    // Información básica
    nombre: 'John Doe',
    edad: 30,

    // Configuración
    arquetipo: 'ARQ_01',
    rol: 'ROL_In_01',

    // Marcas
    estado_marcas: 'despierta',
    marcas: [
        'MAR_Ce_01'
    ],

    // Especialidades
    especialidades: {
        'ESP_San_01': 0,
        'ESP_San_02': 0,
        'ESP_San_03': 0,
        'ESP_San_04': 0,
        'ESP_San_05': 0,
        'ESP_San_06': 0
    },

    // Atributos
    atributos: {
        vida: { valor: 5, estado: '/' },
        aguante: { valor: 5, estado: '/' },
        conexion: { valor: 3, estado: '/' },
        espiritu: { valor: 3, estado: '/' }
    },

    estadisticas: {
        Fisico: 0, 
        Ingenio: 2, 
        Lavia: 2, 
        Percepción: 2, 
        Herramientas: 1
    },

    // Conocimientos básicos
    conocimientos_basicos: {},

    // Progresión
    puntos: {
        historias: 1,
        aprendizajes: {
            disponibles: 20,
            conseguidos: 0
        },
        hitos: {
            disponibles: 15,
            conseguidos: 0
        }
    },

    // Inventario
    inventario: {"libro" : 1}
};
