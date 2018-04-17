import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TotalGastosMensuales, Gastos, DetalleGastosComunes } from 'app/gastos/interface/gastos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  panelOpenState: boolean = true;
  step = 0;
  Data: TotalGastosMensuales[];

  constructor() {
    this.Data = [
      { Mes: 'Mayo', Nombre: 'Mensual', Total: 1.0079, Gastos: [{ Nombre: 'Departamento', Valor: 1000 }, { Nombre: 'Estacionamiento', Valor: 1000}]},
      { Mes: 'Abril', Nombre: 'Mensual', Total: 4.0026, Gastos: [{ Nombre: 'Departamento', Valor: 1000 }, { Nombre: 'Estacionamiento', Valor: 1000 }] },
      { Mes: 'Marzo', Nombre: 'Mensual', Total: 6.941, Gastos: [{ Nombre: 'Departamento', Valor: 1000 }, { Nombre: 'Estacionamiento', Valor: 1000 }] }
    ];
  }

  ngOnInit() {
  }
  displayedColumns = ['descripcion', 'numeroEgreso', 'egreso','saldo'];
  dataSourceA = new MatTableDataSource(Data_detalle_A);
  dataSourceB = new MatTableDataSource(Data_detalle_B);

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSourceA.filter = filterValue;
  // }

  

}

const Data_detalle_A: DetalleGastosComunes[] = [
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0},
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Sueldo X', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 }
];

const Data_detalle_B: DetalleGastosComunes[] = [
  { descripcion: 'Aguas Andinas S.A', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Enel Chile S.A', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Telefonica Chile', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Aguas Andinas S.A', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Enel Chile S.A', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Telefonica Chile', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 },
  { descripcion: 'Telefonica Chile', numeroEgreso: 1684, egreso: 376874, ingreso: 0, saldo: 0 }
];

