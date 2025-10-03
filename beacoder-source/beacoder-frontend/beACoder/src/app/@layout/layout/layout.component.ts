import { Component, Signal, ViewChild, effect } from '@angular/core';
import { AppNavItemComponent } from '../full/sidebar/nav-item/nav-item.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../full/sidebar/sidebar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { provideTablerIcons } from 'angular-tabler-icons';
import { HeaderComponent } from '../full/header/header.component';
import { AppTopstripComponent } from '../full/top-strip/topstrip.component';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { navItems } from './sidebar-data';
import { BreakpointObserver } from '@angular/cdk/layout';

import {
  MatDrawerToggleResult,
  MatSidenav,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { filter, Subscription } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';
import { AppSettings } from 'src/app/config';
import { MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';

@Component({
  selector: 'bac-layout',
  imports: [
    AppNavItemComponent,
    RouterModule,
    CommonModule,
    SidebarComponent,
    NgScrollbarModule,
    HeaderComponent,
    AppTopstripComponent,
    MatSidenavModule,
    MatNavList,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [provideTablerIcons(TablerIcons)],
})
export class LayoutComponent {
  navItems = navItems;

  @ViewChild('leftsidenav') public sidenav!: MatSidenav;
  @ViewChild('content', { static: true }) content!: MatSidenavContent;

  // options is a signal
  public options: Signal<AppSettings>;
  private layoutChangesSubscription = Subscription.EMPTY;

  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(
    private settings: CoreService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.options = this.settings.getOptions(); // <-- WritableSignal<AppSettings>
    this.htmlElement = document.querySelector('html')!;

    // react to breakpoint changes
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW])
      .subscribe((state) => {
        this.settings.setOptions({
          sidenavOpened: true,
          sidenavCollapsed: state.breakpoints[TABLET_VIEW],
        });
        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
      });

    // scroll top on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.content.scrollTo({ top: 0 });
      });
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
    const current = this.options();
    this.settings.setOptions({
      sidenavCollapsed: !current.sidenavCollapsed,
    });
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    setTimeout(() => {
      // persist options again after animation
      this.settings.setOptions(this.options());
    }, timer);
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(result: boolean | MatDrawerToggleResult) {
    const isOpened = typeof result === 'boolean' ? result : result === 'open';

    this.isCollapsedWidthFixed = !this.isOver;
    this.settings.setOptions({
      sidenavOpened: isOpened,
    });
  }
}
