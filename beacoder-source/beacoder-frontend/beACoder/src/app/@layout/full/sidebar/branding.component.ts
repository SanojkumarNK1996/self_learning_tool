import { Component, Signal } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { RouterModule } from '@angular/router';
import { AppSettings } from 'src/app/config';

@Component({
  selector: 'app-branding',
  imports: [RouterModule],
  template: `
    <a [routerLink]="['/']">
      <img
        src="./assets/images/logos/learn.svg"
        class="align-middle m-2"
        alt="logo"
      />
    </a>
  `,
})
export class BrandingComponent {
  protected options: Signal<AppSettings>;

  constructor(private settings: CoreService) {
    this.options = this.settings.getOptions(); //
  }
}
