import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beti';

  nombre = 'Rodriguez Pablo';
  edad = 4;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 5000];
  activo = false;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
  contador = 1;

  incrementar() {
    this.contador= this.contador+1000000000;
  }

  decrementar() {
    this.contador--;
  }

}
