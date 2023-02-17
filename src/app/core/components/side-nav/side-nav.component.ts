import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMenuItem } from '../../models/IMenuItem';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input() menu: IMenuItem[] | undefined;
  @Input() isHome: boolean;
  ckBoxProp = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.isHome)
    if (this.isHome) {
      document.body.classList.add("sidebaractive");
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isHome) {
      document.body.classList.add("sidebaractive");
    }
  }

  setMenuLinkActive(menuItemSelected: IMenuItem): void {
    this.menu?.forEach(menuItem => {
      if (menuItem.isSelected == true) {
        menuItem.isSelected = false;
      }
    });
    menuItemSelected.isSelected = true;
    // document.body.classList.add("sidebaractive");
    this.toggleSideBar();
  }

  toggleSideBar(menuIconclicked?: string): void {
    let ckbox = document.getElementById('openSidebarMenu') as HTMLInputElement;
    if (document.body.classList.contains("sidebaractive") && !menuIconclicked) {
      return;
    } else {
      if (document.body.classList.contains("sidebaractive")) {
        document.body.classList.remove("sidebaractive");
        ckbox.checked = false;
        this.ckBoxProp = ckbox.checked
      } else {
        ckbox.checked = true;
        this.ckBoxProp = ckbox.checked
        document.body.classList.add("sidebaractive");
      }
    }
  }
}
