export enum UserRolesEnumChoice {
    GERENCIA = 'GERENCIA', // all business
    ADMINISTRADOR = 'ADMINISTRADOR', // all area
    COORDINADOR = 'COORDINADOR', // all department
    SUPERVISOR = 'SUPERVISOR', // all sales channel
    AGENTE = 'AGENTE', // all created by himself

    TECNICO = 'TECNICO', // flotas - group tecnico
    PLANTA_EXTERNA = 'PLANTA EXTERNA', // flotas - group tecnico
    INVENTARIO = 'INVENTARIO', // flotas - group tecnico
    OPERADOR_ACTIVACIONES = 'OPERADOR ACTIVACIONES', // all orden trabajo
    // no filters (pool ips, netconect):
    OPERADOR_NETWORKING = 'OPERADOR NETWORKING',
    OPERACIONES = 'OPERACIONES',

    BODEGA = 'BODEGA',
    COORDINADOR_LOGISTICA = 'COORDINADOR_LOGISTICA',
    COORDINADOR_VENTAS = 'C§OORDINADOR_VENTAS',
    AUXILIAR = 'AUXILIAR',
    INVENTARIO_GENERAL = 'INVENTARIO_GENERAL',
    OPERADOR = 'OPERADOR',
    PRODUCTO = 'PRODUCTO',
    SOPORTE_N1 = 'SOPORTE_N1',
    COBRANZA = 'COBRANZA',
    TICKET = 'TICKET',

    SAC = 'SAC',
    JEFATURA_NOC = 'JEFATURA_NOC',
    OPERADOR_NOC = 'OPERADOR_NOC',
    OPERACIONES_RUTA = 'OPERACIONES_RUTA',
    OPERACIONES_ALL = 'OPERACIONES_ALL',
    ADMIN = 'ADMIN',
    INVENTARIO_CLIENTE = 'INVENTARIO_CLIENTE',
    ANALISTA_COBRANZA_P = 'ANALISTA_COBRANZA_P',
    ANALISTA_COBRANZA_2DO = 'ANALISTA_COBRANZA_2DO',
    ANALISTA_COBRANZA_3ER = 'ANALISTA_COBRANZA_3ER',
    GESTOR_COBRANZA = 'GESTOR_COBRANZA',
    GESTOR_COBRANZA_2DO = 'GESTOR_COBRANZA_2DO',
    PRODUCTO_CLIENTE = 'PRODUCTO_CLIENTE',
    CX_SOPORTE = 'CX-SOPORTE',
    CX_SAC = 'CX_SAC',
    LOGISTICA_ZONAS = 'LOGISTICA DE ZONAS',
}
export const USER_ROLES_ARRAY_CHOICES = [
    UserRolesEnumChoice.GERENCIA,
    UserRolesEnumChoice.ADMINISTRADOR,
    UserRolesEnumChoice.COORDINADOR,
    UserRolesEnumChoice.SUPERVISOR,
    UserRolesEnumChoice.AGENTE,

    UserRolesEnumChoice.TECNICO,
    UserRolesEnumChoice.PLANTA_EXTERNA,
    UserRolesEnumChoice.INVENTARIO,
    UserRolesEnumChoice.OPERADOR_ACTIVACIONES,
    UserRolesEnumChoice.OPERADOR_NETWORKING,

    UserRolesEnumChoice.BODEGA,
    UserRolesEnumChoice.COORDINADOR_LOGISTICA,
    UserRolesEnumChoice.COORDINADOR_VENTAS,
    UserRolesEnumChoice.AUXILIAR,
    UserRolesEnumChoice.INVENTARIO_GENERAL,
    UserRolesEnumChoice.OPERADOR,
    UserRolesEnumChoice.PRODUCTO,
    UserRolesEnumChoice.SOPORTE_N1,
    UserRolesEnumChoice.COBRANZA,
    UserRolesEnumChoice.OPERACIONES,
    UserRolesEnumChoice.TICKET,

    UserRolesEnumChoice.SAC,
    UserRolesEnumChoice.JEFATURA_NOC,
    UserRolesEnumChoice.OPERADOR_NOC,
    UserRolesEnumChoice.OPERACIONES_RUTA,
    UserRolesEnumChoice.OPERACIONES_ALL,
    UserRolesEnumChoice.ADMIN,
    UserRolesEnumChoice.INVENTARIO_CLIENTE,
    UserRolesEnumChoice.ANALISTA_COBRANZA_P,
    UserRolesEnumChoice.ANALISTA_COBRANZA_2DO,
    UserRolesEnumChoice.ANALISTA_COBRANZA_3ER,
    UserRolesEnumChoice.GESTOR_COBRANZA,
    UserRolesEnumChoice.GESTOR_COBRANZA_2DO,
    UserRolesEnumChoice.PRODUCTO_CLIENTE,
    UserRolesEnumChoice.CX_SOPORTE,
    UserRolesEnumChoice.CX_SAC,
    UserRolesEnumChoice.LOGISTICA_ZONAS,
];