import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../data/services/api/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-user-emplojee',
  templateUrl: './create-user-emplojee.component.html',
  styleUrls: ['./create-user-emplojee.component.scss']
})
export class CreateUserEmplojeeComponent implements OnInit {

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
    })
    this.getUser();

  }

  get newForm(): FormGroup{
    return this._formBuilder.group({
      ci:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      names:[null, [Validators.required, Validators.pattern(this.onlyWord)]],
      surnames:[null, Validators.required, Validators.pattern(this.onlyWord)],
      email:[null,[Validators.required, Validators.email]],
      username:[null],
      password:[null],
      role:[2]
    })
  }

  onSubmit():void{
    if(this.userForm.valid){
      if(this.emailField.value && this.ciField.value){
        this.usernameField.setValue(this.emailField.value);
        this.passwordField.setValue(`user-${this.ciField.value}`)
      }
      if(this.id){
        this.updateUserEmplojee();
      }else {
        this.createUserEmplojee();
      }
    }else{
      this.userForm.markAllAsTouched();
    }

  }

  createUserEmplojee(){
    this.userService.store(this.userForm.value).subscribe(
      user => {
        this.userForm.patchValue(user);
        alert(`el usuario con CI ${user.ci} fue creado correctamente`)
      }
    )
  }

  getUser(){
    this.userService.getUpdateUser(this.id).subscribe(user=>{
      this.userForm.patchValue(user);
    })
  }

  updateUserEmplojee(){
    this.userService.update(this.id, this.userForm.value).subscribe(
      user =>{
        this.userForm.patchValue(user);
        alert(`el usuario con CI ${user.ci} fue actualizado correctamente`)
      }
    )
  }

  get ciField(): AbstractControl {
    return this.userForm.controls.ci;
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
