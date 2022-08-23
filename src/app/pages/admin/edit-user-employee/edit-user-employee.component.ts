import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../data/services/api/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user-employee',
  templateUrl: './edit-user-employee.component.html',
  styleUrls: ['./edit-user-employee.component.scss']
})
export class EditUserEmployeeComponent implements OnInit {
  id:any;
  onlyWord:any= /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
  userForm: FormGroup = this.newForm;


  constructor(private _formBuilder: FormBuilder,
              private userService:UserService,
              public route: ActivatedRoute,
              public routes: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getUser();
  }

  get newForm():FormGroup{
    return this._formBuilder.group({
      identity_card:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      names:[null, [Validators.required, Validators.pattern(this.onlyWord)]],
      surnames:[null, [Validators.required, Validators.pattern(this.onlyWord)]],
      email:[null,[Validators.required, Validators.email]],
      username:[null],
      password:[null],
    })
  }

  onSubmit():void{
    if(this.userForm.valid){
      if(this.emailField.value && this.identityCardField.value){
        this.usernameField.setValue(this.emailField.value);
        this.passwordField.setValue(`user-${this.identityCardField.value}`)
      }
      this.updateUserEmplojee();
    }else{
      this.userForm.markAllAsTouched();
    }

  }

  updateUserEmplojee(){
    this.userService.update(this.id, this.userForm.value).subscribe(
      user =>{
        this.userForm.patchValue(user);
        alert(`el usuario con CI ${user.names} fue actualizado correctamente`)
        this.routes.navigate(['adminDashboard'])
      }
    )
  }

  getUser(){
    this.userService.getUpdateUser(this.id).subscribe(user=>{
      this.userForm.patchValue(user);
    })
  }

  get identityCardField(): AbstractControl {
    return this.userForm.controls.identity_card;
  }

  get namesField(): AbstractControl {
    return this.userForm.controls.names;
  }

  get surnamesField(): AbstractControl {
    return this.userForm.controls.surnames;
  }

  get emailField(): AbstractControl {
    return this.userForm.controls.email;
  }

  get usernameField():AbstractControl{
    return this.userForm.controls.username;
  }

  get passwordField():AbstractControl{
    return  this.userForm.controls.password;
  }

}
