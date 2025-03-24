import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
      
  }
  
  onClick() {
    this.userService.logOut()
    .then(response => {
      console.log(response);
      this.router.navigate(['/register']);
    })
    .catch(error => console.log(error));
}

}
