import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router)
  {}
  title = 'ExpenseApp-SPA';

  isShowLogoutButton: boolean= false;
  ngOnInit() {
    console.log("user id is "+localStorage.getItem('userid'));
    if(localStorage.getItem("userid"))
    {
    this.isShowLogoutButton=true;
    }
  }

  logout()
  {
    console.log('logout');
    this.isShowLogoutButton=false;
    localStorage.removeItem('userid');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
