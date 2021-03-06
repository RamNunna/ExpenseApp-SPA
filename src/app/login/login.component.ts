import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService,private router: Router) {}
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  ngOnInit() {}
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.router.navigateByUrl('/expense');
        console.log("login sucessfully");
      },
      (error) => {
        console.log("failed to login ");
      }
    );
  }
}
