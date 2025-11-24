import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  standalone: false,
  templateUrl: './nopagefound.html',
  styleUrls: ['./nopagefound.css'],
})
export class Nopagefound {
    year = new Date ().getFullYear();
}
