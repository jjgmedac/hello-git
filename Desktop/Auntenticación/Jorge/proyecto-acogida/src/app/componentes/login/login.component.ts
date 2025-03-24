import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { UserServiceService } from '../../user-service.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
 onSubmit() {
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
    }

    OnClick() {
      this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);  
      })
      .catch(error => console.log(error))
    }
  }