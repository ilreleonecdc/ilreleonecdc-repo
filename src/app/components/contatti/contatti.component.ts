import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ContattiService } from '../../services/contatti.service';
import { Contatto } from '../../models/contatto.model';
import { AnimateOnScroll } from "primeng/animateonscroll";

type Topic = 'Biglietti' | 'Collaborazioni' | 'Stampa' | 'Altro';

@Component({
  selector: 'app-contatti',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FloatLabelModule, InputTextModule, SelectModule, InputMaskModule, ButtonModule, MessageModule, ToastModule, TextareaModule, AnimateOnScroll],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss',
  providers: [MessageService]
})
export class ContattiComponent implements OnInit{
  private fb = inject(FormBuilder);
  private service = inject(ContattiService);
  private toast = inject(MessageService);

  sending = false;
  sent = false;
  error = '';

  //opzioni select
  topics = [
    { label: 'Biglietti',        value: 'Biglietti' as Topic },
    { label: 'Collaborazioni',   value: 'Collaborazioni' as Topic },
    { label: 'Stampa',           value: 'Stampa' as Topic },
    { label: 'Altro',            value: 'Altro' as Topic }
  ]

  //honeypot anti-bot (campo nascosto)
  honey = '';

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    cognome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    oggetto: ['' as Topic, [Validators.required]],
    messaggio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
  });

  get f() { return this.form.controls }

  ngOnInit(): void {
    this.form.reset();
  }

  onSubmit() {
this.error = '';
    if (this.honey.trim() !== '') {
      // bot: fingi success per non dare segnali
      this.sent = true;
      this.form.reset();
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = new Contatto();
    payload.numeroPratica = ''; // generata lato backend se la vuoi
    payload.nome = this.f.nome.value!.trim();
    payload.cognome = this.f.cognome.value!.trim();
    payload.email = this.f.email.value!.trim();
    payload.oggettoRichiesta = this.f.oggetto.value as string;
    payload.messaggio = this.f.messaggio.value!.trim();

    this.sending = true;
    this.service.sendContatto(payload).subscribe({
      next: () => {
        this.sending = false;
        this.sent = true;
        this.toast.add({
          severity: 'success',
          summary: 'Messaggio inviato',
          detail: 'Grazie! Ti risponderemo al più presto.',
          life: 6000
        });
        this.form.reset();
      },
      error: () => {
        this.sending = false;
        this.sent = false;
        this.error = 'Invio non riuscito, riprova più tardi.';
        this.toast.add({
          severity: 'error',
          summary: 'Errore invio',
          detail: this.error,
          life: 6000
        });
      }
    });
  }

}
