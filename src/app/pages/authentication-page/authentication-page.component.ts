import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private formB: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formB.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\d-_]{1,16}$/)]],
      password: ['', [Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  userRegister() {
    const userData = this.userForm.getRawValue();
    this.userService.registerUser(userData).subscribe(
        resp => {
          this.router.navigateByUrl('/products');
          localStorage.setItem('userName', userData.username);
        },
        error => {
          alert('АХТУНГ! НИРАБОТАИТ');
        }
    );
  }

  userLogin() {
    const userData = this.userForm.getRawValue();
    this.userService.loginUser(userData).subscribe(
        res => {
          this.router.navigateByUrl('/products');
          localStorage.setItem('userName', userData.username);
        },
        error => {
          alert('АХТУНГ! НИРАБОТАИТ');
        }
    );
  }
}
