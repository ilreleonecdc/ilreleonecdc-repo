import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-privacy',
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
readonly lastUpdate = new Date();
  private readonly document = inject(DOCUMENT);

  ngAfterViewInit(): void {
    // Smooth scroll anche per hash esterni / refresh con #section
    const hash = this.document.location.hash?.replace('#','');
    if (hash) {
      setTimeout(() => {
        const el = this.document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string, ev?: Event) {
  ev?.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // aggiorna l'URL senza ricaricare
    history.replaceState(null, '', `#${id}`);
  }
}
}
