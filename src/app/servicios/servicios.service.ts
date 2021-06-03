import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Servicio } from 'src/modelos/servicios';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class serviciosService {
  private url = 'http://localhost:8080/api/api.php';

  public API_ENDPIONT;
  public Config;

  constructor(private http: HttpClient, public router:Router) {
  
    this.Config=JSON.parse(localStorage.getItem('ConfigIp'));
    if (this.Config)
      this.API_ENDPIONT = 'http://'+this.Config.IP+':8080/api/api.php';
    else
      this.API_ENDPIONT = 'http://localhost:8080/api/api.php';

  }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {    
      this.router.navigateByUrl('/config');
      return of(result as T);
    };
  }

  getServicios():Observable<Servicio[]>{
    let rdo=null;
    if(this.urlExists(this.API_ENDPIONT+'/services')){
      rdo=this.http.get<Servicio[]>(this.API_ENDPIONT+'/services').pipe(
        catchError(this.handleError('getServicios', []))
      );
    }
    return rdo;
  }

  getServicio(user:any):Observable<Servicio>{
    return this.http.get<Servicio>(this.API_ENDPIONT+'/services?filter[]=name,eq,'+user).pipe(
      catchError(this.handleError<Servicio>(`getServicio services=${user}`))
    );
  }
  delete(id){
    return this.http.delete(this.API_ENDPIONT+'/services/'+id);
  }

  updateDuenyo(Servicioss,id) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.put(
      this.API_ENDPIONT+'/services/'+Servicioss.id,
      Servicioss,
      {headers:headers}
    )
  }

  addServicio (Servicioss) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(
      this.API_ENDPIONT+'/services/',
      Servicioss,
      {headers:headers}
    )
  }
  urlExists(url) {
    return fetch(url, {mode: "no-cors"})
       .then(res => true)
       .catch(err => false)
    }

}