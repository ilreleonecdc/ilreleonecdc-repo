import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menuOpen = false;
  isScrolled = false;
  scrollProgress = 0;
  isHome = false;
  isContatti = false;
  isFloating = false;

  constructor(private router: Router, private r: Renderer2) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        // controlla se sei sulla home
        this.isHome = e.urlAfterRedirects === '/' || e.urlAfterRedirects.startsWith('/#');
        this.isContatti = e.urlAfterRedirects === '/contatti' || e.urlAfterRedirects === '/gallery' || e.urlAfterRedirects === '/prenota';
      });
  }

  openMenu() {
    this.menuOpen = true;
    // blocca scroll del body
    this.r.addClass(document.body, 'menu-open');
    // sposta il focus dentro il drawer
    queueMicrotask(() => {
      const firstLink = document.querySelector('#mobile-drawer a') as HTMLElement | null;
      firstLink?.focus();
    });
  }

  closeMenu() {
    this.menuOpen = false;
    this.r.removeClass(document.body, 'menu-open');
    // ritorna focus al bottone hamburger
    const btn = document.querySelector('.hamburger') as HTMLElement | null;
    btn?.focus();
  }

  // Chiudi quando si clicca un link del menu
  onNavClick(ev: Event) {
    const t = ev.target as HTMLElement;
    if (t.tagName === 'A') this.closeMenu();
  }

  // ESC per chiudere
  @HostListener('document:keydown.escape')
  onEsc() { if (this.menuOpen) this.closeMenu(); }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;

    this.isScrolled = scrollTop > 0;
  }
}
