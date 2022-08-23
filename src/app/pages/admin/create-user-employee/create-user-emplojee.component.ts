import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../data/services/api/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-user-employee',
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
  }

  get newForm(): FormGroup{
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
      this.createUserEmplojee();

    }else{
      this.userForm.markAllAsTouched();
    }

  }

  createUserEmplojee(){
    this.userService.store(this.userForm.value).subscribe(
      user => {
        this.userForm.patchValue(user);
        alert(`el usuario con CI ${user.identity_card} fue creado correctamente`);
        this.routes.navigate(['adminDashboar'])
      }
    )
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
