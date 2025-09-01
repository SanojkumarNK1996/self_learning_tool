import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandingComponent } from './branding.component';
import { TablerIconComponent } from 'angular-tabler-icons';

@Component({
  selector: 'app-sidebar',
  imports: [BrandingComponent, TablerIconComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor() {}
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  ngOnInit(): void {}
}
