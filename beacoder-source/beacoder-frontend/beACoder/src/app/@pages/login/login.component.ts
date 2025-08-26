import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bac-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly router = inject(Router);

  protected login() {
    this.router.navigate(['/user']);
  }
}
