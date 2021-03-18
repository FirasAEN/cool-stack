import { Component } from '@angular/core';
import { AppIconService } from './ui/app-icon.service';
import { NgZorro, Angular, Social } from './ui/icons';

@Component({
  selector: 'aln-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly title = 'alten-app';
  public readonly Social = Social;
  public readonly Angular = Angular;
  public readonly NgZorro = NgZorro;
  constructor(private appIconService: AppIconService) {
    this.appIconService.registerIcons();
  }
}
