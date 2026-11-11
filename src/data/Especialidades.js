export const Especialidades = [
  // ==========================================
  // 1. INTELECTUAL
  // ==========================================

  // SANADOR
  {
    id: 'ESP_San_01',
    id_Rol: 'ROL_In_01',
    nombre: 'Trauma',
    descripcion_i: 'Capacidad para tratar lesiones físicas leves',
    descripcion_d: 'al usar Trauma se debe realizar una tirada de dados, cada éxito conseguido permite eliminar un impacto leve o equivalente, si se consiguen 5 éxitos sobrantes se pueden usar para dar el estado positivo (solo aplicables a la salud, no se puede usar si no hay herida previa)',
  },
  {
    id: 'ESP_San_02',
    id_Rol: 'ROL_In_01',
    nombre: 'Cirugía',
    descripcion_i: 'Capacidad para realizar tratamientos médicos mediante intervención quirúrgica.',
    descripcion_d: 'Cada éxito conseguido permite eliminar un impacto moderado o equivalente. Si se consiguen 5 éxitos sobrantes, se puede aplicar un estado positivo. Solo es aplicable a la salud y no puede utilizarse si no existe una herida previa.'
  },
  {
    id: 'ESP_San_03',
    id_Rol: 'ROL_In_01',
    nombre: 'Anatomía',
    descripcion_i: 'Capacidad para entender la estructura y funcionamiento del cuerpo estudiado.',
    descripcion_d: 'Permite entender, analizar o visualizar un cuerpo mediante una tirada. Si resulta exitosa, se obtiene información sobre el cuerpo o individuo. Cada éxito sobrante se convierte en un éxito parcial automático para la siguiente tirada que implique manipulación o requiera conocimiento del cuerpo.'
  },
  {
    id: 'ESP_San_04',
    id_Rol: 'ROL_In_01',
    nombre: 'Toxicología',
    descripcion_i: 'Capacidad para identificar y neutralizar venenos o sustancias nocivas en el organismo.',
    descripcion_d: 'Permite identificar un veneno, toxina o sustancia nociva mediante una tirada. Cada éxito sobrante aporta éxitos parciales automáticos a la siguiente tirada que implique conocimiento sobre la toxina.'
  },
  {
    id: 'ESP_San_05',
    id_Rol: 'ROL_In_01',
    nombre: 'Herbolaria',
    descripcion_i: 'Capacidad para elaborar distintos remedios, medicinas o tratamientos basados en plantas y otros recursos naturales.',
    descripcion_d: 'Tiene dos usos principales: identificar o recolectar plantas medicinales y fabricar medicinas. Al identificar o recolectar, se encuentran X ejemplares de plantas medicinales, donde X corresponde a los éxitos mínimos necesarios para superar la tirada. Cada éxito sobrante proporciona otro ejemplar. Al fabricar medicinas, se pueden curar o eliminar X impactos leves o equivalentes, donde X corresponde a los éxitos mínimos necesarios. Cada éxito sobrante incrementa en 1 la cantidad de impactos que se pueden curar o eliminar.'
  },
  {
    id: 'ESP_San_06',
    id_Rol: 'ROL_In_01',
    nombre: 'Farmacéutica',
    descripcion_i: 'Capacidad para elaborar y utilizar medicamentos, compuestos químicos y tratamientos farmacológicos.',
    descripcion_d: 'Cuando se quiera fabricar o utilizar componentes químicos para crear fármacos o medicinas, se puede realizar una tirada de Farmacéutica. La efectividad del preparado para cumplir su propósito corresponde a los éxitos mínimos necesarios para superar la tirada. Cada éxito sobrante incrementa en 1 su efectividad.'
  },

  // ORADOR
  {
    id: 'ESP_ORA_01',
    id_Rol: 'ROL_In_02',
    nombre: 'Psicología',
    descripcion_i: '',
    descripcion_d: 'Permite entender o analizar la mente de otra persona mediante una tirada de Psicología.'
  },
  {
    id: 'ESP_ORA_02',
    id_Rol: 'ROL_In_02',
    nombre: 'Lingüística',
    descripcion_i: 'Capacidad para comprender e interpretar distintos idiomas o lenguas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_ORA_03',
    id_Rol: 'ROL_In_02',
    nombre: 'Persuasión',
    descripcion_i: 'Capacidad para convencer y persuadir a otras personas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_ORA_04',
    id_Rol: 'ROL_In_02',
    nombre: 'Actuación',
    descripcion_i: 'Capacidad para interpretar y actuar de diversas formas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_ORA_05',
    id_Rol: 'ROL_In_02',
    nombre: 'Lectura',
    descripcion_i: '',
    descripcion_d: 'Permite conocer la situación o estado psicológico y emocional de una persona mediante una tirada. Cada éxito sobrante aporta éxitos parciales automáticos a la siguiente tirada que implique conocimiento sobre el individuo.'
  },
  {
    id: 'ESP_ORA_06',
    id_Rol: 'ROL_In_02',
    nombre: 'Perfilado',
    descripcion_i: '',
    descripcion_d: 'Permite conocer las características generales, vivencias o trasfondo de una persona mediante una tirada. Cada éxito sobrante aporta éxitos parciales automáticos a la siguiente tirada que implique conocimiento sobre el individuo.'
  },

  // ERUDITO
  {
    id: 'ESP_Exp_01',
    id_Rol: 'ROL_In_03',
    nombre: 'Historia',
    descripcion_i: 'Capacidad para conocer, estudiar y comprender la historia.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Exp_02',
    id_Rol: 'ROL_In_03',
    nombre: 'Mitología',
    descripcion_i: 'Capacidad para conocer, estudiar y comprender la mitología y los mitos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Exp_03',
    id_Rol: 'ROL_In_03',
    nombre: 'Antropología',
    descripcion_i: 'Capacidad para conocer y comprender las culturas, las sociedades y el comportamiento humano desde una perspectiva antropológica.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Exp_04',
    id_Rol: 'ROL_In_03',
    nombre: 'Ocultismo',
    descripcion_i: 'Capacidad para conocer y estudiar distintas tradiciones esotéricas, creencias paranormales y fenómenos anómalos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Exp_05',
    id_Rol: 'ROL_In_03',
    nombre: 'Folklore urbano',
    descripcion_i: 'Capacidad para conocer, comprender, estudiar o interpretar leyendas y mitos urbanos, rumores y creencias populares modernas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Exp_06',
    id_Rol: 'ROL_In_03',
    nombre: 'Investigación',
    descripcion_i: 'Capacidad para recopilar, analizar e interpretar información con el fin de descubrir hechos, relaciones o evidencias.',
    descripcion_d: ''
  },

  // ==========================================
  // 2. CALLEJERO
  // ==========================================

  // COMBATIENTE
  {
    id: 'ESP_Pel_01',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Combate a puño limpio',
    descripcion_i: 'Capacidad para combatir utilizando únicamente el cuerpo.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Pel_02',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Armas precisas',
    descripcion_i: 'Capacidad para utilizar armas que requieren precisión y control.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Pel_03',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Armas pesadas',
    descripcion_i: 'Capacidad para usar armas pesadas con eficiencia.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Pel_04',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Imponer físico',
    descripcion_i: 'Capacidad para someter o superar a un oponente mediante la fuerza.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Pel_05',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Juego sucio',
    descripcion_i: 'Capacidad para hacer trucos y trampas durante una pelea.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Pel_06',
    id_Rol: 'ROL_Ca_01',
    nombre: 'Predicción',
    descripcion_i: 'Capacidad para predecir y anticipar los movimientos del oponente.',
    descripcion_d: ''
  },

  // INTIMIDADOR
  {
    id: 'ESP_Int_01',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Presencia',
    descripcion_i: 'Capacidad para transmitir autoridad, respeto o poder mediante la apariencia, la actitud y el lenguaje corporal.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Int_02',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Dominación',
    descripcion_i: 'Capacidad para ejercer control sobre otra persona mediante presión física, psicológica o social.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Int_03',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Amenaza',
    descripcion_i: 'Capacidad para intimidar a un individuo mediante advertencias, coacción o demostraciones de fuerza.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Int_04',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Provocación',
    descripcion_i: 'Capacidad para provocar una reacción emocional o impulsiva en otra persona mediante palabras o acciones.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Int_05',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Instinto',
    descripcion_i: 'Capacidad para identificar las debilidades físicas o psicológicas de un individuo mediante el mero instinto.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Int_06',
    id_Rol: 'ROL_Ca_02',
    nombre: 'Brutalidad',
    descripcion_i: 'Capacidad para imponerse mediante el uso de la fuerza, la violencia o la agresividad.',
    descripcion_d: ''
  },

  // CORREDOR
  {
    id: 'ESP_Cor_01',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Agilidad',
    descripcion_i: 'Capacidad para realizar movimientos rápidos, precisos o de gran dificultad.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cor_02',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Velocidad',
    descripcion_i: 'Capacidad para recorrer grandes distancias en el menor tiempo posible.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cor_03',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Flexibilidad',
    descripcion_i: 'Capacidad para adaptar el cuerpo y realizar movimientos que requieren una gran amplitud o elasticidad.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cor_04',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Escurridizo',
    descripcion_i: 'Capacidad para adentrarse por terrenos difíciles o angostos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cor_05',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Escalada',
    descripcion_i: 'Capacidad para ascender por superficies empinadas o de difícil acceso.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cor_06',
    id_Rol: 'ROL_Ca_03',
    nombre: 'Salto',
    descripcion_i: 'Capacidad para realizar saltos largos o altos.',
    descripcion_d: ''
  },

  // ==========================================
  // 3. MECÁNICO
  // ==========================================

  // FABRICANTE
  {
    id: 'ESP_Fab_01',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Ensamblaje',
    descripcion_i: 'Capacidad para fabricar y ensamblar dispositivos o mecanismos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Fab_02',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Electrónica',
    descripcion_i: 'Capacidad para comprender, construir, reparar y manipular circuitos, cableado y componentes electrónicos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Fab_03',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Química práctica',
    descripcion_i: 'Capacidad para preparar y utilizar compuestos químicos aplicados a la fabricación, reparación o modificación de dispositivos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Fab_04',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Modificación',
    descripcion_i: 'Capacidad para adaptar, mejorar o alterar dispositivos existentes para otorgarles nuevas funciones o aumentar su rendimiento.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Fab_05',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Diseño',
    descripcion_i: 'Capacidad para planificar, proyectar y desarrollar nuevos dispositivos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Fab_06',
    id_Rol: 'ROL_Ins_01',
    nombre: 'Herramientas avanzadas',
    descripcion_i: 'Capacidad para utilizar adecuadamente diversas herramientas y maquinaria especializada de forma eficiente.',
    descripcion_d: ''
  },

  // DESARMADOR
  {
    id: 'ESP_Des_01',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Abrir cerradura',
    descripcion_i: 'Capacidad para abrir o sabotear todo tipo de cerraduras.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Des_02',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Trampas',
    descripcion_i: 'Capacidad para identificar, desarmar o armar trampas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Des_03',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Desmontaje',
    descripcion_i: 'Capacidad para desmontar de forma efectiva distintos artefactos sin romperlos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Des_04',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Sabotaje',
    descripcion_i: 'Capacidad para sabotear y romper distintos mecanismos sin desarmarlos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Des_05',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Micro herramientas',
    descripcion_i: 'Capacidad para usar herramientas pequeñas o trabajar en espacios reducidos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Des_06',
    id_Rol: 'ROL_Ins_02',
    nombre: 'Seguridad',
    descripcion_i: 'Capacidad para identificar, entender, sortear o sabotear sistemas de seguridad.',
    descripcion_d: ''
  },

  // CHATARRERO
  {
    id: 'ESP_Cha_01',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Herramientas simples',
    descripcion_i: 'Capacidad para usar herramientas más simples y toscas de forma precisa y eficiente.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cha_02',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Reciclaje',
    descripcion_i: 'Capacidad para reutilizar y recuperar distintos materiales y componentes, parcial o totalmente dañados o inutilizados.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cha_03',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Improvisación',
    descripcion_i: 'Capacidad para improvisar pequeños artefactos u objetos sencillos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cha_04',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Identificar residuos',
    descripcion_i: 'Capacidad para identificar objetos, materiales o artefactos útiles o valiosos escondidos detrás de lo que aparenta ser basura.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cha_05',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Diseño tosco',
    descripcion_i: 'Capacidad para crear y diseñar objetos simples y toscos con los materiales disponibles.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Cha_06',
    id_Rol: 'ROL_Ins_03',
    nombre: 'Reparación rápida',
    descripcion_i: 'Capacidad para realizar rápidas y pequeñas reparaciones.',
    descripcion_d: ''
  },

  // ==========================================
  // 4. TIRADOR
  // ==========================================

  // FUEGO
  {
    id: 'ESP_Mil_01',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Bajo calibre',
    descripcion_i: 'Capacidad para utilizar de forma efectiva armas de fuego de bajo calibre.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Mil_02',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Alto calibre',
    descripcion_i: 'Capacidad para utilizar de forma efectiva armas de fuego de alto calibre.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Mil_03',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Combate urbano',
    descripcion_i: 'Capacidad para comprender, desarrollar y aplicar estrategias de combate en entornos urbanos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Mil_04',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Mantenimiento de armas',
    descripcion_i: 'Capacidad para mantener, reparar y conservar armas de fuego en condiciones óptimas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Mil_05',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Identificación de amenazas',
    descripcion_i: 'Capacidad para identificar, distinguir y evaluar amenazas y posibles enemigos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Mil_06',
    id_Rol: 'ROL_Ti_01',
    nombre: 'Balística',
    descripcion_i: 'Capacidad para comprender, predecir y aprovechar el comportamiento de los proyectiles al interactuar con el entorno.',
    descripcion_d: ''
  },

  // SALVAJE
  {
    id: 'ESP_SalL_01',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Arco de caza',
    descripcion_i: 'Capacidad para utilizar de forma efectiva arcos y emplearlos como armas de caza.',
    descripcion_d: ''
  },
  {
    id: 'ESP_SalL_02',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Rastrear',
    descripcion_i: 'Capacidad para identificar, seguir e interpretar rastros dejados por personas, animales u otros seres.',
    descripcion_d: ''
  },
  {
    id: 'ESP_SalL_03',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Ojo del Cazador',
    descripcion_i: 'Capacidad para identificar y apuntar con precisión a una presa en entornos difíciles o con poca visibilidad.',
    descripcion_d: ''
  },
  {
    id: 'ESP_SalL_04',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Munición improvisada',
    descripcion_i: 'Capacidad para crear, adaptar o improvisar munición utilizando los recursos disponibles.',
    descripcion_d: ''
  },
  {
    id: 'ESP_SalL_05',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Mantenimiento de arco',
    descripcion_i: 'Capacidad para mantener, reparar y conservar arcos y su equipamiento en condiciones óptimas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_SalL_06',
    id_Rol: 'ROL_Ti_02',
    nombre: 'Presa viva',
    descripcion_i: 'Capacidad para perseguir, alcanzar y capturar objetivos vivos en movimiento.',
    descripcion_d: ''
  },

  // COMPETIDOR
  {
    id: 'ESP_CMP_01',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Concentración',
    descripcion_i: 'Capacidad para evitar distracciones o molestias.',
    descripcion_d: ''
  },
  {
    id: 'ESP_CMP_02',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Repetición',
    descripcion_i: 'Capacidad para repetir una acción concreta.',
    descripcion_d: ''
  },
  {
    id: 'ESP_CMP_03',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Tiro de precisión',
    descripcion_i: 'Capacidad para realizar tiros precisos y certeros.',
    descripcion_d: ''
  },
  {
    id: 'ESP_CMP_04',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Control corporal',
    descripcion_i: 'Capacidad para controlar el cuerpo evitando acciones innecesarias o negativas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_CMP_05',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Rutina',
    descripcion_i: 'Capacidad para repetir y memorizar acciones.',
    descripcion_d: ''
  },
  {
    id: 'ESP_CMP_06',
    id_Rol: 'ROL_Ti_03',
    nombre: 'Corrección',
    descripcion_i: 'Capacidad para identificar los errores de un tiro y corregirlos.',
    descripcion_d: ''
  },

  // ==========================================
  // 5. ARCANO
  // ==========================================

  // RÚNICO
  {
    id: 'ESP_Run_01',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Naturales',
    descripcion_i: 'Capacidad para entender, manipular y usar las runas naturales.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Run_02',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Modernas',
    descripcion_i: 'Capacidad para entender, manipular y usar las runas modernas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Run_03',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Antiguas',
    descripcion_i: 'Capacidad para entender, manipular y usar las runas antiguas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Run_04',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Inscripciones',
    descripcion_i: 'Capacidad para crear, entender o manipular inscripciones rúnicas.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Run_05',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Glifos rúnicos',
    descripcion_i: 'Capacidad para crear, entender o manipular glifos rúnicos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Run_06',
    id_Rol: 'ROL_Ar_01',
    nombre: 'Invertir runas',
    descripcion_i: 'Capacidad para invertir runas de forma adecuada.',
    descripcion_d: ''
  },

  // CONJURADOR
  {
    id: 'ESP_Con_01',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Fricción',
    descripcion_i: 'Capacidad para alterar la fricción entre superficies u objetos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Con_02',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Empuje',
    descripcion_i: 'Capacidad para generar, modificar o anular fuerzas de empuje sobre un objeto.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Con_03',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Presión',
    descripcion_i: 'Capacidad para alterar la presión ejercida por o sobre un objeto.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Con_04',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Maleabilidad',
    descripcion_i: 'Capacidad para manipular la maleabilidad de los objetos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Con_05',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Dureza',
    descripcion_i: 'Capacidad para modificar la resistencia física de un material u objeto.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Con_06',
    id_Rol: 'ROL_Ar_02',
    nombre: 'Elasticidad',
    descripcion_i: 'Capacidad para alterar la capacidad de un objeto de deformarse y recuperar su forma original.',
    descripcion_d: ''
  },

  // RELIQUISTA
  {
    id: 'ESP_Rel_01',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Antiguas',
    descripcion_i: 'Capacidad para comprender y utilizar reliquias y artefactos antiguos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Rel_02',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Modernas',
    descripcion_i: 'Capacidad para comprender y utilizar reliquias y artefactos modernos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Rel_03',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Manipulación',
    descripcion_i: 'Capacidad para alterar, potenciar o limitar el funcionamiento de reliquias y artefactos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Rel_04',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Identificación',
    descripcion_i: 'Capacidad para reconocer, clasificar y determinar las propiedades de las reliquias y artefactos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Rel_05',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Sincronización',
    descripcion_i: 'Capacidad para establecer un vínculo estable con reliquias y artefactos.',
    descripcion_d: ''
  },
  {
    id: 'ESP_Rel_06',
    id_Rol: 'ROL_Ar_03',
    nombre: 'Restauración',
    descripcion_i: 'Capacidad para reparar, mantener y restaurar las reliquias y artefactos dañados.',
    descripcion_d: ''
  }
];

/*
    {
        id: 'ESP_Xx_0X',
        id_Rol: 'ROL_Xx_0X',
        nombre: 'nombre de la especialidad',
        descripcion_i: 'descripción de la especialidad',
        descripcion_d: 'descripción de la especialidad detallada',
    },
*/


