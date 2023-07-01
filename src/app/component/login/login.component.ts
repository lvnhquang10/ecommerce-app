import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  user = {
    userName: 'justin',
    password: '222222'
  }

  constructor(private apiService: ApiService,
    private router: Router) {  }

  ngOnInit(): void { }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  logIn() {
    console.log(this.user);
    this.apiService.login(this.user).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['profile']);
    })
  }
}
