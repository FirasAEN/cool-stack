import { Injectable } from '@angular/core';
import {NzIconService} from 'ng-zorro-antd/icon';
import {angularIcons, IAlnIconDefinition, IIconNamespace, socialIcons} from './icons';

@Injectable({
  providedIn: 'root'
})
export class AppIconService {
  private iconNamespaces = [socialIcons, angularIcons];
  constructor(
    private ngZorroRegistry: NzIconService,
  ) { }

  public registerIcons(): void {
    for (const iconNamespace of this.iconNamespaces ) {
      this.loadIcons(iconNamespace);
    }
  }

  private loadIcons(iconNamespace: IIconNamespace): void {
    const { name, icons } = iconNamespace;
    icons.forEach((icon) => this.loadIcon(name, icon));
  }

  private loadIcon(namespace: string, icon: IAlnIconDefinition): void {
    this.ngZorroRegistry.addIconLiteral(`${namespace}:${icon.name}`, `${icon.literalIconSvg}`);
  }
}
