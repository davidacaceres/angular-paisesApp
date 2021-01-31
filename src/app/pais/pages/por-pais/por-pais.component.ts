import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  countries:Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;


  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    console.log('Buscar termino ', this.termino);
    this.service.buscarPais(this.termino).subscribe(paises => {
      console.log(paises);
      this.countries=paises;
    }, err => {
      this.countries=[];
      this.hayError = true;
    });
  }
  sugerencias(termino:string){
    this.mostrarSugerencias=true;
    console.log('Buscando sugerengias');
    this.termino=termino;

    this.hayError=false;
    this.service.buscarPais(termino).subscribe(paises => this.paisesSugeridos=paises.splice(0,5));

  }

  buscarSugerido(termino:string){
    this.buscar(termino);

  }
  constructor(private service: PaisService) {


  }


}
