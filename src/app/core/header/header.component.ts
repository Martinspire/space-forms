import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [];
  homeItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
  ];

  adminItems: MenuItem[] = [
    {
      label: 'Admin',
      icon: 'pi pi-user',
      routerLink: '/admin',

      items: [
        {
          label: 'Create',
          icon: 'pi pi-plus',
          routerLink: '/admin/create',
        },
        {
          label: 'Play',
          icon: 'pi pi-play',
          routerLink: '/admin/play',
        },
      ],
    }];

  playerItems: MenuItem[] = [
    {
      label: 'Player',
      icon: 'pi pi-user',
      routerLink: '/player',
      items: [
        {
          label: 'Play',
          icon: 'pi pi-play',
          routerLink: '/player/play',
        },
      ],
    },
  ];

  constructor(adminService: AdminService) {
    if (adminService.isAdmin()) {
      this.menuItems = [...this.homeItems, ...this.adminItems, ...this.playerItems];
    }
    else {
      this.menuItems = [...this.homeItems, ...this.playerItems];
    }
  }
}
