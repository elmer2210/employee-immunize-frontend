import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/User";
import {AuthService} from "../../../data/services/api/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.newForm

  constructor(private _formBuilder: FormBuilder,
              private authService:AuthService,
              public route: ActivatedRoute,
              public routes: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.loginForm.value);
    if (this.loginForm.valid){
      console.log("Entró awuí")
      this.login(this.usernameField.value, this.passwordField.value);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }

  login(username:string, password:string){
    this.authService.login(username, password).subscribe(user=>{

      if(user){
        switch (user.role){
          case 'admin':{
            this.routes.navigate(['adminDashboard']);
            alert(`Bienvenido ${user.username}`);
            break;
          };
          case 'emplojee':{
            this.routes.navigate(['emplojeeDashboard']);
            alert(`Bienvenido ${user.username}`);
            break;
          };
          default:{
            alert(`El usuario o contraseña incorrecta`);
            break;
          }
        }
      }
    })
  }


  get newForm(): FormGroup{
    return this._formBuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }

  get usernameField():AbstractControl{
    return this.loginForm.controls.username;
  }

  get passwordField():AbstractControl{
    return  this.loginForm.controls.password;
  }

}
