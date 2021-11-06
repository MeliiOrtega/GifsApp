import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';


@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent implements OnInit {

      get items(){return this.sharedS.historial}
  

  constructor(private sharedS: GifsService) { }

  ngOnInit(): void {
  }

  buscar(item:string){
    this.sharedS.buscar(item);
  }

}
