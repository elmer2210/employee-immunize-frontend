import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../data/services/api/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users:User[] = [];
  constructor(private userService:UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.showUser();
  }

  showUser(){
    this.userService.getUsers().subscribe(
      users =>{
        this.users = users;
      }
    )
  }

  editUser(id:number){
    this.router.navigate(['/updateUserEmplojee', id]);
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      user =>{
        alert(`Usuario ${user.names} ${user.surname} fue eliminado correctamente`)
      }
    )
  }

}
