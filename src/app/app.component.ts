import { Component } from '@angular/core';
import {AppIconService} from './ui/app-icon.service';

@Component({
  selector: 'aln-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'alten-app';

  constructor(private appIconService: AppIconService) {
    this.appIconService.registerIcons();
  }
}
