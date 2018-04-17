export interface Gastos{
    Nombre: String;
    Valor: Number;
}

export interface TotalGastosMensuales {
    Nombre: String;
    Total: Number;
    Mes: String;
    Gastos: Array<Gastos>;
}

export interface DetalleGastosComunes {
    numeroEgreso: Number;
    descripcion: String;
    egreso: Number;
    ingreso: Number;
    saldo: Number;
}

