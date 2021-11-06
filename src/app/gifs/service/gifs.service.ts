import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

interface Busqueda {
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey = 'OeETXEDlOvHwc5aS45RaKDdELx9NDXB7';
  //FIXME CAMBIAR TIPO
  private _resultados:Gif[] = [];
  private servicioURL:string = 'https://api.giphy.com/v1/gifs';

  get historial() {
    return [...this._historial];
  }

  get resultados(){
    return [...this._resultados];
  }


  constructor(private http:HttpClient) {
    if(localStorage.getItem('historial')){ //SI EXISTE EN LOCALSORAGE HISTORIAL ENTONCE
      //ANCHOR this._historial = JSON.parse(localStorage.getItem('historial')!)
      // JSON se encargara de pasar el string a un objeto
    }
    //MAS RESUMIDO
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscar(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      //* Si no esta en el array
      this._historial.unshift(query); //Lo agrega al principio del array
      this._historial = this._historial.splice(0, 10);
      //localStorage.setItem('historial', JSON.stringify(this._historial));
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    //const params = new HttpParams().set('apikey', this.apikey);
    const params = new HttpParams().set('api_key',this.apiKey).set('limit','10').set('q',query);

    /* this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=OeETXEDlOvHwc5aS45RaKDdELx9NDXB7&q=${query}&limit=20`) */
    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`,{params})
    .subscribe((resp) => {
      this._resultados = resp.data;
      console.log(this._resultados);
      localStorage.setItem('resultados', JSON.stringify(this._resultados));
    });



  }
}
