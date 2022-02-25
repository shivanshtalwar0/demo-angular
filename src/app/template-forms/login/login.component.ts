import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email = ''
  password = ''

  attemptLogin() {
    console.log('hit some api')
  }

  ngOnInit(): void {
  }

}
