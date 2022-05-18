import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-services';
import { User } from '../interfaces/User/user-interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: Array<User> | undefined;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
this.userService.getUsers().subscribe((data:  any)=> {
      this.users = data.slice(0,10);
      console.log(this.users);

    })
  }

}
