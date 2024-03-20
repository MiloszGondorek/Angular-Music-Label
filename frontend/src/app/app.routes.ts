import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { StudioComponent } from './pages/studio/studio.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: HomeComponent },
];
