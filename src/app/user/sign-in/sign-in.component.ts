import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Token } from 'src/app/_model/token.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  token: Token;

  constructor(private userService: UserService) { }

  ngOnInit() { }

  onSubmit(username: string, password: string): void {
    this.userService.initialiseVariables();

    if (username == "admin" || username == "user") {
      this.userService.signin("notConnectedToDB", username, "300");
    } else {
      // TODO Display a different message when web-services-authentication is down:
      // Browser and Concole
      this.userService.userAuthentication(username, password).subscribe(
        (data: Token)=> {
          if (data == null) {
            console.log("User: " + username + " - Invalid username or password!");
            this.userService.isLoginError = true;
          } else if (data.accessToken != null && data.sessionTimeOut != null) {
            this.userService.signin(data.accessToken.toString(), username, data.sessionTimeOut.toString());
          }
        },
        (err: HttpErrorResponse)=> {
          this.userService.isLoginError = true;
        }
      );
    }
  }

}
