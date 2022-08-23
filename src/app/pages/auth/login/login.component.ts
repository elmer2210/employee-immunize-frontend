import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, RouteConfigLoadEnd, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/User";
import {AuthService} from "../../../data/services/api/auth/auth.service";
import {Login, LoginResponse} from "../../../models/Login";
import {Role} from "../../../models/Role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.newForm;
  errorStatus:boolean = false;
  errorMsg:any = "";

  constructor(private _formBuilder: FormBuilder,
              private authService:AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if (this.loginForm.valid){
      console.log("Entró awuí")
      this.login(this.loginForm.value);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }

  login(login:Login){
    this.authService.onlogin(login).subscribe(resp => {
      if (resp.msg?.summary == 'OK') {
        switch (resp.msg?.details.role?.role_name) {
          case 'admin':{
            this.router.navigate(['adminDashboard']).then(()=>{window.location.reload();});
            break;
          }case 'employee':{
            alert("Sus pantallas entan en contrucción pronto podrá ingresar")
            break;
          }default:{
            this.router.navigate(['login'])
            alert('Ups!!, algo salio mal')
            break;
          }
        }
      }else{
        this.errorStatus = true;
        this.errorMsg = resp.msg?.summary;
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
