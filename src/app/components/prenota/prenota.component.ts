import { CommonModule } from '@angular/common';
import { Component, NgModule,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
  endDate?: ISODate;
  venue: string;
  city: string;
  url: string;
  cover?: string;
  soldOut: boolean;
  enabled?: boolean
}

export interface Evento {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  url?: string;
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
      url: '',
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
      url: '',
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
      url: '',
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
      url: '',
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
      url: 'https://billetto.it/e/il-re-leone-cdc-il-musical-biglietti-1666403?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false

    },
    {
      id: 'citta-di-castello-2025-10-26',
      title: 'Il Re Leone CDC – Il Musical',
      date: '2025-10-26T21:00:00+01:00',
      venue: 'Teatro degli Illuminati',
      city: 'Città di Castello',
      url: 'https://billetto.it/e/il-re-leone-cdc-il-musical-biglietti-1666405?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1',
      cover: '../../../assets/images/varie/illuminati.jpg',
      soldOut: true,
      enabled: false
    },
    {
      id: 'assisi-2026-03-21',
      title: 'Re Leone - Lei Vive in Noi',
      date: '2026-03-21T21:00:00+01:00',
      endDate: '2026-03-21T23:30:00+01:00',
      venue: 'Teatro Lyrick',
      city: 'Assisi',
      url: 'https://ticketitalia.com/re-leone-teatro-lyrick-assisi-perugia-21-marzo-2026',
      // cover: '../../../assets/images/varie/lyrick.jpg',
      // cover: '../../../assets/images/varie/ReLeone_1000x640.webp',
      cover: '../../../assets/images/varie/ReLeoneCover.svg',
      soldOut: true,
      enabled: true
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

  downloadICal(s: any, event?: MouseEvent) {
    event?.stopPropagation();

    const ev: Evento = {
      title: s.title,
      location: `${s.venue}, ${s.city}`,
      startDate: new Date(s.date),
      endDate: new Date(s.endDate),
      url: s.url ? s.url : undefined
    }

    const icsContent = this.buildIcsContent(ev);

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${s.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  private buildIcsContent(ev: Evento): string {
    const dtStart = this.formatDateToICS(ev.startDate);
    const dtEnd = this.formatDateToICS(ev.endDate);

    const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Re Leone - Lei Vive in Noi//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${this.generateUid()}`,
    `DTSTAMP:${this.formatDateToICS(new Date())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${this.escapeIcsText(ev.title)}`,
    ev.description ? `DESCRIPTION:${this.escapeIcsText(ev.description)}` : '',
    ev.location ? `LOCATION:${this.escapeIcsText(ev.location)}` : '',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(l => l !== '');

    return lines.join('\r\n');
  }

  private formatDateToICS(date: Date): string {
  // formato: YYYYMMDDTHHMMSSZ (UTC)
  const iso = date.toISOString(); // es: 2025-03-10T20:00:00.000Z
  return iso.replace(/[-:]/g, '').split('.')[0]; // -> 20250310T200000Z
}

private escapeIcsText(text: string): string {
  // escape minimo per ICS
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

private sanitizeFileName(name: string): string {
  return name.replace(/[\/\\?%*:|"<>]/g, '_');
}

private generateUid(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 10)}@ilreleone`;
}
}
