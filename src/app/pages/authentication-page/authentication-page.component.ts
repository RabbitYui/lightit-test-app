import {Component, OnInit} from '@angular/core';
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
  public usernameError: string;

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

    this.userForm.valueChanges.subscribe(changes => {
      this.userForm.setErrors(null);
    });
  }

  userRegister() {
    const userData = this.userForm.getRawValue();
    this.userService.registerUser(userData).subscribe(
        resp => {
          if (resp.success === false) {
            if (resp.message === 'User with such username already exists') {
              this.usernameError = 'Данный пользователь уже существует';
            }
          } else {
            this.router.navigateByUrl('/products');
            localStorage.setItem('userName', userData.username);
          }
        },
        error => {
          this.userForm.setErrors({server: true});
        }
    );
  }

  userLogin() {
    const userData = this.userForm.getRawValue();
    this.userService.loginUser(userData).subscribe(
        res => {
            if (res.success === true) {
                localStorage.setItem('userName', userData.username);
                this.router.navigateByUrl('/products');
            } else {
                this.usernameError = 'Неверный логин или пароль';
            }
        },
        error => {
          this.userForm.setErrors({server: true});
        }
    );
  }
}
