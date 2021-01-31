import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{


  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  countries:Country[]=[];
  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    this.service.buscarCapital(this.termino).subscribe(paises => {
      this.countries=paises;
    }, err => {
      this.countries=[];
      this.hayError = true;
    });
  }
  constructor(private service: PaisService) {


  }

}
