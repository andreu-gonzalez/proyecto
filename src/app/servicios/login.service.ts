  
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserToAJSON } from 'src/modelos/user';
import { StoragesessionService } from './storagesession.service';
import { userService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:userService, private router:Router, private StgSesion:StoragesessionService) { }

  rdo=false
  Empleado: any;

  login(user:string, password:string){
    this.StgSesion.setSessionLoggedOut();
    this.api.getuser(user).subscribe(res => {
      this.Empleado = UserToAJSON(res);
      if(this.Empleado.length>0){
        if(password == this.Empleado[0].user_password){
          let token = "token";
          let u = {username:user, token:token};
          this.StgSesion.setSessionLogedIn(u);
          this.router.navigateByUrl('/menu');
        }
      }
    }, err => {

    });
  }
}