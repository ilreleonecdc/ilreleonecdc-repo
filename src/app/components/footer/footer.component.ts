import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-footer',
  imports: [AnimateOnScroll, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
