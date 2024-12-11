import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent),
},
{
  path: 'admin',
  loadComponent: () => import('./feature/admin/admin.component').then(m => m.AdminComponent),
  children: [{
    path: 'create',
    loadComponent: () => import('./feature/admin/create/create.component').then(m => m.CreateComponent),
  }, {
    path: 'play',
    loadComponent: () => import('./feature/admin/play/play.component').then(m => m.PlayComponent),
  }],
}, {
  path: 'player',
  loadComponent: () => import('./feature/player/player.component').then(m => m.PlayerComponent),
  children: [{
    path: 'play',
    loadComponent: () => import('./feature/player/play/play.component').then(m => m.PlayComponent),
  }],
}];
