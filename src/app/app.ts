import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AtletaComponent } from './component/atleta-component/atleta-component';

import { Menu } from './component/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, AtletaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte_ar_livre');
}
