import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMenuItem } from '../../models/IMenuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input() menu: IMenuItem[] | undefined;
  @Input() isHome: boolean;
  @Input() isSummary: boolean;
  ckBoxProp = false;
  constructor(private router: Router) {
    if (this.isHome) {
      document.body.classList.add("sidebaractive");
      document.body.classList.add("sideBarHeightNone");
    }else if (document.body.classList.contains("sideBarHeightNone")) {
      document.body.classList.remove("sideBarHeightNone")
    }
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes?.['isHome']?.currentValue !== changes?.['isHome']?.previousValue && !this.isHome && document.body.classList.contains("sidebaractive")){
      document.body.classList.remove("sidebaractive")
    }
    if (changes?.['isSummary']?.currentValue !== changes?.['isSummary']?.previousValue && !this.isHome && !this.isSummary){
      let ckbox = document.getElementById('openSidebarMenu') as HTMLInputElement;
      document.body.classList.add("sidebaractive");
      ckbox.checked = true;
    }
    if (this.isHome) {
      document.body.classList.add("sidebaractive");
      document.body.classList.add("sideBarHeightNone");
    }
    else if (!this.isHome && document.body.classList.contains("sidebaractive")){
      // document.body.classList.remove("sidebaractive")

    }
    if (!this.isHome && document.body.classList.contains("sideBarHeightNone")){ 
      document.body.classList.remove("sideBarHeightNone")
    }
    
  }


  setMenuLinkActive(menuItemSelected: IMenuItem): void {
    console.log(menuItemSelected);

    if (menuItemSelected) {
      if((menuItemSelected.label =='UDISE School Infrastructure' || menuItemSelected.label=='School General' || menuItemSelected.label=='PAS' || menuItemSelected.label=='Staff and Students' || menuItemSelected.label=='PGI and School Safety') && (localStorage.getItem('login_access')=='login_public')){
        // this.router.navigate(['/login']);
        localStorage.setItem('user_check','private_user');
        this.router.navigate(['/loggedIn']);
      }else{
        // this._router.navigate([cardInfo.navigationURL.trim()]);
        this.menu?.forEach(menuItem => {
          if (menuItem.isSelected == true) {
            menuItem.isSelected = false;
          }
        });
        menuItemSelected.isSelected = true;
        // document.body.classList.add("sidebaractive");
        this.toggleSideBar();
      }
    }    
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
