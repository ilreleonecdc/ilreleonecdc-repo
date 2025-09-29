import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PrenotaComponent } from './components/prenota/prenota.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'prenota', component: PrenotaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'privacy', component: PrivacyComponent },

  // 404
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
