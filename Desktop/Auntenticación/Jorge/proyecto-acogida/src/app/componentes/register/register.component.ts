import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { UserServiceService } from '../../user-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserServiceService,
    private router: Router)
    
    { 
      this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log(error);
    });

}
}