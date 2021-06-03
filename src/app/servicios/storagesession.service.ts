import { Injectable } from '@angular/core';
import { Isession } from 'src/modelos/isession';


@Injectable({
  providedIn: 'root'
})
export class StoragesessionService {

  private isUserLoggedIn:boolean = false;
  public sessionLogged:Isession;

  constructor() { }

  setSessionLogedIn(session:Isession){
    this.isUserLoggedIn = true;
    this.sessionLogged = session;
    sessionStorage.setItem('currentUser',JSON.stringify(session))
  }

  getSessionLoggedIn(){
    return JSON.parse(sessionStorage.getItem('currentUser'))
  }

  isAuthenticated():boolean{
    return this.isUserLoggedIn;
  }

  setSessionLoggedOut(){
    sessionStorage.removeItem('currentUser')
    this.sessionLogged = null;
    this.isUserLoggedIn = false;
  }
}