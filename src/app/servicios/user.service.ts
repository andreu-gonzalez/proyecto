import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/modelos/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class userService {

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

  getusers():Observable<User[]>{
    let rdo=null;
    if(this.urlExists(this.API_ENDPIONT+'/users')){
      rdo=this.http.get<User[]>(this.API_ENDPIONT+'/users').pipe(
        catchError(this.handleError('getusers', []))
      );
    }
    return rdo;
  }

  getuser(user:any):Observable<User>{
    return this.http.get<User>(this.API_ENDPIONT+'/users?filter[]=user_name,eq,'+user).pipe(
      catchError(this.handleError<User>(`getuser users=${user}`))
    );
  }
  delete(id){
    return this.http.delete(this.API_ENDPIONT+'/users/'+id);
  }

  updateDuenyo(us) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.put(
      this.API_ENDPIONT+'/users/'+us.id,
      us,
      {headers:headers}
    )
  }

  save (us) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(
      this.API_ENDPIONT+'/users',
      us,
      {headers:headers}
    )
  }
  urlExists(url) {
    return fetch(url, {mode: "no-cors"})
       .then(res => true)
       .catch(err => false)
    }

}