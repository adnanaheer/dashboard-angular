import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @ViewChild('sidenav') sidenav: MatSidenavModule;
  isExpanded = true;
  showSubmenu: boolean = false;
  showmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
