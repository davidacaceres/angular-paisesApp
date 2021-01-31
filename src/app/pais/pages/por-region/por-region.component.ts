import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{margin-right: 4px;}`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];
  regionActiva: string = '';
  constructor(private servicio: PaisService) { }


  getClassCss(region: string): string {
    return (region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary');
  }

  activarRegion(region: string) {
    if(region===this.regionActiva) return;
    this.regionActiva = region;
    this.countries=[];
    this.servicio.buscarRegion(region).subscribe(paises => {
      console.log(paises);
      this.countries = paises;
    }, err => {
      this.countries = [];
    });

  }
}
