import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { AnimateOnScroll } from "primeng/animateonscroll";
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from "primeng/floatlabel"

export interface Show{
  id: string;
  title: string;
  date: ISODate;
  venue: string;
  city: string;
  billettoUrl: string;
  cover?: string;
  soldOut: boolean;
  enabled?: boolean
}

export interface Option<T = string>{
  label: string;
  value: T;
}

type ISODate = string;

@Component({
  selector: 'app-prenota',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonModule, ToggleSwitchModule, AnimateOnScroll, SelectModule, FloatLabelModule],
  templateUrl: './prenota.component.html',
  styleUrl: './prenota.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PrenotaComponent implements OnInit {
  shows: Show[] = [
    {
      id: 'citta-di-castello-2025-04-05',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-04-05T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: '',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false
    },
    {
      id: 'citta-di-castello-2025-04-06',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-04-06T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: '',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false

    },
    {
      id: 'citta-di-castello-2025-04-26',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-04-26T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: '',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false

    },
    {
      id: 'citta-di-castello-2025-04-27',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-04-27T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: '',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false
    },
    {
      id: 'citta-di-castello-2025-10-25',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-10-25T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: 'https://billetto.it/e/il-re-leone-cdc-il-musical-biglietti-1666403?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: false,
      enabled: true

    },
    {
      id: 'citta-di-castello-2025-10-26',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-10-26T21:00:00+02:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      billettoUrl: 'https://billetto.it/e/il-re-leone-cdc-il-musical-biglietti-1666405?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: true
    },
    {
      id: 'assisi-2026-03-21',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2026-03-21T21:00:00+02:00',
      venue: 'Teatro Lyrick',
      city: 'Assisi',
      billettoUrl: '',
      cover: '../../../assets/images/varie/lyrick.jpg',
      soldOut: false,
      enabled: false
    },
  ];

  //filtri semplici
  selectedCity: string = '';
  selectedMonth: string ='';
  includePast = false;

  // opzioni per i select
  cityOptions: Option<string | null>[] = [];
  monthOptions: Option<string | null>[] = [];

  ngOnInit(): void {
    // Città (uniche)
    const cities = Array.from(new Set(this.shows.map(s => s.city)))
      .sort((a, b) => a.localeCompare(b, 'it'));
    this.cityOptions = [{ label: 'Tutte le città', value: '' }, ...cities.map(c => ({ label: c, value: c }))];

    // Mesi (YYYY-MM unici)
    const ymSet = new Set(this.shows.map(s => s.date.slice(0, 7))); // "YYYY-MM"
    const ym = Array.from(ymSet).sort(); // ordinati cronologicamente
    this.monthOptions = [
      { label: 'Tutti i mesi', value: '' },
      ...ym.map(m => ({
        label: this.labelMonth(m).charAt(0).toUpperCase() + this.labelMonth(m).slice(1), // "ottobre 2025"
        value: m                   // "2025-10"
      }))
    ];
  }

  // Etichetta leggibile "MMMM yyyy" per un "YYYY-MM"
  private labelMonth(ym: string): string {
    // ym = "YYYY-MM" -> costruisco una data fake il giorno 01
    const d = new Date(ym + '-01T00:00:00');
    return d.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });
  }

  // Lista filtrata + ordinata per data
  get filteredShows(): Show[] {
    const now = new Date();
    return this.shows
      .filter(s => {
        const d = new Date(s.date);
        if (!this.includePast && d < now) return false;
        if (this.selectedCity && s.city !== this.selectedCity) return false;
        if (this.selectedMonth && !s.date.startsWith(this.selectedMonth)) return false;
        return true;
      })
      .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }
}
