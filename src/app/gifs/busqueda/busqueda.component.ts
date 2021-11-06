import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar:ElementRef<HTMLInputElement>;


  constructor(private buscarS: GifsService) { }

  ngOnInit(): void {
  }

  buscar(event:any){
    const d = this.txtBuscar.nativeElement.value;
    if(d.trim().length === 0){
      return;
    }
    this.buscarS.buscar(event);
    
    this.txtBuscar.nativeElement.value = "";
    
  }

}
