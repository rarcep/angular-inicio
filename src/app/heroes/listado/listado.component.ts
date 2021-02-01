import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  herores         : string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado   : string = '';

  borrarHeroe() {
    let heroeBorrado = this.herores.shift() || '';
    this.heroeBorrado = heroeBorrado;
    console.log(this.heroeBorrado);
  }
}
