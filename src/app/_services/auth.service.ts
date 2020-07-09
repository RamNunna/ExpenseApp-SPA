import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseUrl = "http://localhost:44354/api/auth/";
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((respose: any) => {
        const user = respose;
        if (user) {
          localStorage.setItem("token", user.Token);
          localStorage.setItem("userid", user.UserId);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + "register", model).subscribe(
      (next) => {
        console.log("register sucessfully");
      },
      (error) => {
        console.log("somthing wrong in register");
      }
    );
  }
}
