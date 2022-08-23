import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthLocal} from "../../../data/services/api/auth/auth-local.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role:any;
  isAdmin:boolean = false;
  isLogin:boolean = this.authLocal.isLoggedIn;
  constructor(private route:Router,
              private authLocal:AuthLocal) { }

  ngOnInit(): void {
      this.checkRole();
  }

  checkRole(){
   this.role = localStorage.getItem('role')
    switch (this.role){
      case 'admin':{
        this.isAdmin = true;
        break;
      }case 'employee':{
        break;
      }
    }
  }

  logaut(){
    this.authLocal.removeLogin();
    this.route.navigate(['home']).then(()=>{window.location.reload();});
  }

}
