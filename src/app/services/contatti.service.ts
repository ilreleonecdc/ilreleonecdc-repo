import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contatto } from '../models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor() { }

  private http = inject(HttpClient);

  // stesso endpoint dell'oratorio
  private readonly apiUrl = 'https://oratorio-backend.onrender.com/api/releone/contatto';

  sendContatto(contatto: Contatto) {
    return this.http.post(this.apiUrl, contatto);
  }
}
