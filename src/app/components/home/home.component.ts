import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-home',
  imports: [AnimateOnScroll, ButtonModule, RouterLink, CarouselModule, CommonModule, KnobModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSentinel', { static: true }) heroSentinel!: ElementRef<HTMLElement>;
  @ViewChild('metricsSection', { static: false }) metricsSection?: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;
  private metricsObserver?: IntersectionObserver;

  // PERSONAGGI PRINCIPALI (sostituisci immagini/titoli reali)
  characters = [
    { name: 'Mufasa', img: 'assets/images/personaggi/mufasa.webp' },
    { name: 'Nala', img: 'assets/images/personaggi/nala.webp' },
    { name: 'Nala Jr.', img: 'assets/images/personaggi/nalajr.webp' },
    { name: 'Rafiki', img: 'assets/images/personaggi/rafiki.webp' },
    { name: 'Sarabi', img: 'assets/images/personaggi/sarabi.webp' },
    { name: 'Scar', img: 'assets/images/personaggi/scar.webp' },
    { name: 'Shenzi, Banzai & Ed', img: 'assets/images/personaggi/iene.webp' },
    { name: 'Simba', img: 'assets/images/personaggi/simba.webp' },
    { name: 'Simba Jr.', img: 'assets/images/personaggi/simbajr.webp' },
    { name: 'Timon & Pumbaa', img: 'assets/images/personaggi/timonpumbaa.webp' },
    { name: 'Zazu', img: 'assets/images/personaggi/zazu.webp' },
    { name: 'Scopri la Galleria', img: 'assets/images/varie/obbiettivo.webp', class: 'obbiettivo' },
  ];

  // CITAZIONI (metti le tue reali)
  quotes = [
    { text: 'È stato strepitoso, un lavoro straordinario, le coreografie, gli abiti e i ragazzi coinvolti... credo sia stato un lavoro inimmaginabile.', author: 'Spettatrice' },
    { text: 'Complimenti di cuore per lo spettacolo di questa sera e per le forti emozioni che ci avete regalato [...] Le scenografie, le luci, i costumi, la recitazione... tutto perfetto!', author: 'Spettatore' },
    { text: 'Avete creato una roba pazzesca... non trovo le parole per dirti che SPETTACOLO incredibile avete fatto.', author: 'Spettatrice' },
    { text: 'Commovente, entusiasmante, struggente, divertente, stupefacente, catartico, liberatorio... un colpo al cuore, di quelli che ti fanno piangere e ridere insieme.', author: 'Spettatrice' },
  ];

  // TRAGUARDI & FUTURO (demo)
  // Target (puoi cambiare qui)
  spectatorsTarget = 1400;
  volunteersTarget = 100;

  // Valori mostrati nel knob (partono da 0)
  spectatorsDisplay = 0;
  volunteersDisplay = 0;

  private knobsAnimated = false;

  trackByName = (_: number, item: { name: string }) => item.name;

  ngOnInit() {
    // Nascondi header finché l’utente è nella hero
    document.body.classList.add('home-no-header');

    // Mostra header quando si supera la hero (sentinella esce dalla viewport)
    this.observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          // nella hero => header nascosto
          document.body.classList.remove('show-header');
        } else {
          // fuori dalla hero => header visibile
          document.body.classList.add('show-header');
        }
      },
      { threshold: 0.01 }
    );
    this.observer.observe(this.heroSentinel.nativeElement);
  }

  ngAfterViewInit() {
    // Avvia il count-up quando la sezione "metrics" entra in viewport
    if (this.metricsSection) {
      this.metricsObserver = new IntersectionObserver((entries) => {
        const e = entries[0];
        if (e.isIntersecting && !this.knobsAnimated) {
          this.knobsAnimated = true;
          this.animateCountUp('spectators');
          this.animateCountUp('volunteers');
        }
      }, { threshold: 0.2 });
      this.metricsObserver.observe(this.metricsSection.nativeElement);
    }
  }

  private animateCountUp(which: 'spectators' | 'volunteers') {
    const duration = 1200; // ms
    const start = performance.now();
    const startVal = 0;
    const endVal = which === 'spectators' ? this.spectatorsTarget : this.volunteersTarget;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(p);
      const current = Math.round(startVal + (endVal - startVal) * eased);
      if (which === 'spectators') this.spectatorsDisplay = current;
      else this.volunteersDisplay = current;

      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  ngOnDestroy() {
    document.body.classList.remove('home-no-header', 'show-header');
    this.observer?.disconnect();
  }
}
