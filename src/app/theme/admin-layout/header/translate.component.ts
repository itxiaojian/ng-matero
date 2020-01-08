import { Component } from '@angular/core';

@Component({
  selector: 'app-translate',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>translate</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <span class="flag-icon flag-icon-cn"></span>
        <span>Chinese</span>
      </button>
      <button mat-menu-item>
        <span class="flag-icon flag-icon-us"></span>
        <span>English</span>
      </button>
    </mat-menu>
  `,
})
export class TranslateComponent {}
