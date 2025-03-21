import { Component, Input } from '@angular/core';
import { Main } from '../main'; 
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

      @Input() mainData!: Main;

}
