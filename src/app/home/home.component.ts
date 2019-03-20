import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Constants } from '../_config/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { 
    this.userService.getSessionUser();
  } 

  goToSelectFile(): void {
    this.router.navigate([Constants.SELECT_FILE_URL]);
  }
}
