import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  get resultados(){
    return this.resSer.resultados;
  }

  constructor(private resSer:GifsService) {}

  ngOnInit(): void {
  }

}
